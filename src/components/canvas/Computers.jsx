import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "../CanvasErrorBoundary";

const MODEL_URL = "./desktop_pc/scene.gltf";
const MODEL_BIN_URL = "./desktop_pc/scene.bin";

const assetExists = async (url) => {
  try {
    const head = await fetch(url, { method: "HEAD" });
    if (head.ok) return true;
    if (head.status !== 405 && head.status !== 501) return false;

    const get = await fetch(url, { method: "GET" });
    return get.ok;
  } catch {
    return false;
  }
};

const Computers = ({ isMobile }) => {
  const computer = useGLTF(MODEL_URL);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [canRenderModel, setCanRenderModel] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  useEffect(() => {
    let cancelled = false;

    Promise.all([assetExists(MODEL_URL), assetExists(MODEL_BIN_URL)]).then(
      ([gltfOk, binOk]) => {
        if (!cancelled) setCanRenderModel(gltfOk && binOk);
      }
    );

    return () => {
      cancelled = true;
    };
  }, []);

  if (!canRenderModel) return null;

  return (
    <CanvasErrorBoundary>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default ComputersCanvas;
