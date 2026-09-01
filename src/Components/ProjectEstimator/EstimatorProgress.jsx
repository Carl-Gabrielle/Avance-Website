
import { motion } from "framer-motion";

function EstimatorProgress({
  currentStep,
  totalSteps,
}) {
  const progress =
    (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="
        mb-3
        flex
        items-center
        justify-between
      ">
        <span className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#888888]
        ">
          Project estimator
        </span>

        <span className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#999999]
        ">
          {String(currentStep).padStart(
            2,
            "0"
          )}{" "}
          /{" "}
          {String(totalSteps).padStart(
            2,
            "0"
          )}
        </span>
      </div>

      <div className="
        h-1
        overflow-hidden
        rounded-full
        bg-black/[0.06]
      ">
        <motion.div
          className="
            h-full
            rounded-full
            bg-[#171817]
          "
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

export default EstimatorProgress;