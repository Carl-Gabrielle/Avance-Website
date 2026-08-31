import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import EstimatorProgress from "./EstimatorProgress";
import ProjectTypeStep from "./ProjectTypeStep";
import PagesStep from "./PagesStep";
import DesignStep from "./DesignStep";
import FeaturesStep from "./FeaturesStep";
import TimelineStep from "./TimelineStep";
import EstimateResult from "./EstimateResult";

import { calculateEstimate } from "../../utils/calculateEstimate";

const TOTAL_STEPS = 5;

function ProjectEstimator({
  isOpen,
  onClose,
  initialPackage = null,
  onRequestProject,
}) {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState({
    projectType: "",
    pages: "",
    design: "",
    features: [],
    timeline: "",
  });

  const [estimate, setEstimate] = useState(null);

  /*
  |--------------------------------------------------------------------------
  | Reset estimator when opened
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!isOpen) return;

    setStep(1);

    setAnswers({
      projectType: "",
      pages: "",
      design: "",
      features: [],
      timeline: "",
    });

    setEstimate(null);
  }, [isOpen]);

  /*
  |--------------------------------------------------------------------------
  | Lock body scroll while modal is open
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /*
  |--------------------------------------------------------------------------
  | Don't render when closed
  |--------------------------------------------------------------------------
  */

  if (!isOpen) {
    return null;
  }

  /*
  |--------------------------------------------------------------------------
  | Update answer
  |--------------------------------------------------------------------------
  */

  function updateAnswer(key, value) {
    setAnswers((current) => ({
      ...current,
      [key]: value,
    }));
  }

  /*
  |--------------------------------------------------------------------------
  | Validate current step
  |--------------------------------------------------------------------------
  */

  function canContinue() {
    switch (step) {
      case 1:
        return Boolean(answers.projectType);

      case 2:
        return Boolean(answers.pages);

      case 3:
        return Boolean(answers.design);

      case 4:
        // Features are optional.
        return true;

      case 5:
        return Boolean(answers.timeline);

      default:
        return false;
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Go to next step
  |--------------------------------------------------------------------------
  */

  function nextStep() {
    if (!canContinue()) {
      return;
    }

    /*
     * Final step:
     * Calculate the project before displaying the result.
     */

    if (step === TOTAL_STEPS) {
      const result = calculateEstimate(answers);

      setEstimate(result);
      setStep(6);

      return;
    }

    setStep((current) =>
      Math.min(current + 1, TOTAL_STEPS)
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Go back
  |--------------------------------------------------------------------------
  */

  function previousStep() {
    /*
     * If we're on the result screen,
     * go back to the final question.
     */

    if (step === 6) {
      setStep(TOTAL_STEPS);
      return;
    }

    setStep((current) =>
      Math.max(current - 1, 1)
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Restart estimator
  |--------------------------------------------------------------------------
  */

  function restartEstimator() {
    setStep(1);

    setAnswers({
      projectType: "",
      pages: "",
      design: "",
      features: [],
      timeline: "",
    });

    setEstimate(null);
  }

  /*
  |--------------------------------------------------------------------------
  | Request proposal / project
  |--------------------------------------------------------------------------
  */

  function handleRequestProject(data = {}) {
    onRequestProject?.({
      ...data,
      answers,
      estimate,
    });
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/45 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 30,
          scale: 0.98,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[28px] bg-[#f5f5f2] text-[#171817] shadow-2xl sm:max-h-[90vh] sm:rounded-[28px]"
      >
        {/* -------------------------------------------------------------- */}
        {/* Header */}
        {/* -------------------------------------------------------------- */}

        <div className="flex shrink-0 items-center justify-between border-b border-black/[0.07] px-5 py-4 sm:px-7">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7c9825]">
              Avance
            </p>

            <p className="mt-1 text-[10px] text-[#999999]">
              Estimate your project
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close estimator"
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-white text-[#555555] transition-colors hover:bg-[#171817] hover:text-white"
          >
            <X size={17} />
          </button>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* Content */}
        {/* -------------------------------------------------------------- */}

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">
          {/* Progress only appears during questions */}

          {step <= TOTAL_STEPS && (
            <EstimatorProgress
              currentStep={step}
              totalSteps={TOTAL_STEPS}
            />
          )}

          <AnimatePresence mode="wait">
            {/* ---------------------------------------------------------- */}
            {/* Step 1 */}
            {/* ---------------------------------------------------------- */}

            {step === 1 && (
              <motion.div
                key="project-type"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <ProjectTypeStep
                  value={answers.projectType}
                  onChange={(value) =>
                    updateAnswer(
                      "projectType",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ---------------------------------------------------------- */}
            {/* Step 2 */}
            {/* ---------------------------------------------------------- */}

            {step === 2 && (
              <motion.div
                key="pages"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <PagesStep
                  value={answers.pages}
                  onChange={(value) =>
                    updateAnswer(
                      "pages",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ---------------------------------------------------------- */}
            {/* Step 3 */}
            {/* ---------------------------------------------------------- */}

            {step === 3 && (
              <motion.div
                key="design"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <DesignStep
                  value={answers.design}
                  onChange={(value) =>
                    updateAnswer(
                      "design",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ---------------------------------------------------------- */}
            {/* Step 4 */}
            {/* ---------------------------------------------------------- */}

            {step === 4 && (
              <motion.div
                key="features"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <FeaturesStep
                  value={answers.features}
                  onChange={(value) =>
                    updateAnswer(
                      "features",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ---------------------------------------------------------- */}
            {/* Step 5 */}
            {/* ---------------------------------------------------------- */}

            {step === 5 && (
              <motion.div
                key="timeline"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <TimelineStep
                  value={answers.timeline}
                  onChange={(value) =>
                    updateAnswer(
                      "timeline",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ---------------------------------------------------------- */}
            {/* Result */}
            {/* ---------------------------------------------------------- */}

            {step === 6 && estimate && (
              <motion.div
                key="result"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <EstimateResult
                  estimate={estimate}
                  onRestart={restartEstimator}
                  onRequestProposal={
                    handleRequestProject
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* Footer Navigation */}
        {/* -------------------------------------------------------------- */}

        {step <= TOTAL_STEPS && (
          <div className="flex shrink-0 items-center justify-between gap-3 border-t border-black/[0.07] bg-[#f5f5f2] px-5 py-4 sm:px-7">
            {/* Back */}

            <button
              type="button"
              onClick={previousStep}
              disabled={step === 1}
              className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-semibold text-[#666666] transition-colors hover:bg-white hover:text-[#171817] disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft size={15} />

              Back
            </button>

            {/* Continue */}

            <motion.button
              type="button"
              onClick={nextStep}
              disabled={!canContinue()}
              whileTap={{
                scale: 0.98,
              }}
              className="group inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-[#171817] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#d8ff63] hover:text-[#171817] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === TOTAL_STEPS
                ? "See my estimate"
                : "Continue"}

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProjectEstimator;