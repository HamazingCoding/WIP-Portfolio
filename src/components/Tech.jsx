import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <CanvasErrorBoundary
            fallback={
              <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center p-4">
                <img src={technology.icon} alt={technology.name} className="object-contain" />
              </div>
            }
          >
            <BallCanvas icon={technology.icon} />
          </CanvasErrorBoundary>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
