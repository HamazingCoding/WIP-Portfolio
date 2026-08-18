import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "../CanvasErrorBoundary";

const MODEL_URL = "./planet/scene.gltf";
const MODEL_BIN_URL = "./planet/scene.bin";

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

const Earth = () => {
  const earth = useGLTF(MODEL_URL);
  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  const [canRenderModel, setCanRenderModel] = useState(false);

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

  if (!canRenderModel) {
    return (
      <div className="w-full h-full rounded-2xl bg-tertiary flex items-center justify-center text-secondary text-center px-6">
        3D globe loads when planet model files are added to public/planet.
      </div>
    );
  }

  return (
    <CanvasErrorBoundary>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default EarthCanvas;
