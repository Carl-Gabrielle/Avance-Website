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
const RESULT_STEP = 6;

const EMPTY_ANSWERS = {
  projectType: "",
  pages: "",
  design: "",
  features: [],
  timeline: "",
};

function ProjectEstimator({
  isOpen,
  onClose,
  initialPackage = null,
  onRequestProject,
}) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState(EMPTY_ANSWERS);
  const [estimate, setEstimate] = useState(null);

  /*
   |--------------------------------------------------------------------------
   | Reset estimator whenever it opens
   |--------------------------------------------------------------------------
   */

  useEffect(() => {
    if (!isOpen) return;

    setStep(1);
    setAnswers({
      ...EMPTY_ANSWERS,
      features: [],
    });
    setEstimate(null);
  }, [isOpen]);

  /*
   |--------------------------------------------------------------------------
   | LOCK PAGE SCROLL
   |--------------------------------------------------------------------------
   |
   | This is the important fix.
   |
   | Instead of setting html/body overflow to hidden, we freeze the body
   | at the exact scroll position.
   |
   | When the modal closes, we restore that exact position.
   |
   */

  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;

    // Save current scroll position.
    const scrollY = window.scrollY;

    // Save existing styles.
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    // Freeze the page exactly where it currently is.
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      // Restore original body styles.
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      body.style.overflow = previous.overflow;

      // Restore the exact scroll position.
      window.scrollTo({
        top: scrollY,
        left: 0,
        behavior: "instant",
      });
    };
  }, [isOpen]);

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
        return true;

      case 5:
        return Boolean(answers.timeline);

      default:
        return false;
    }
  }

  /*
   |--------------------------------------------------------------------------
   | Next step
   |--------------------------------------------------------------------------
   */

  function nextStep() {
    if (!canContinue()) return;

    if (step === TOTAL_STEPS) {
      const result = calculateEstimate(answers);

      setEstimate(result);
      setStep(RESULT_STEP);

      return;
    }

    setStep((current) =>
      Math.min(current + 1, TOTAL_STEPS)
    );
  }

  /*
   |--------------------------------------------------------------------------
   | Previous step
   |--------------------------------------------------------------------------
   */

  function previousStep() {
    if (step === RESULT_STEP) {
      setStep(TOTAL_STEPS);
      return;
    }

    setStep((current) =>
      Math.max(current - 1, 1)
    );
  }

  /*
   |--------------------------------------------------------------------------
   | Restart
   |--------------------------------------------------------------------------
   */

  function restartEstimator() {
    setStep(1);

    setAnswers({
      ...EMPTY_ANSWERS,
      features: [],
    });

    setEstimate(null);
  }

  /*
   |--------------------------------------------------------------------------
   | Request project
   |--------------------------------------------------------------------------
   */

  function handleRequestProject(data = {}) {
    onRequestProject?.({
      ...data,
      answers,
      estimate,
      initialPackage,
    });
  }

  /*
   |--------------------------------------------------------------------------
   | Don't render when closed
   |--------------------------------------------------------------------------
   */

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-end
        justify-center
        bg-black/45
        sm:items-center
        sm:p-5
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
          scale: 0.99,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 16,
          scale: 0.99,
        }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        className="
          relative
          flex
          h-[92dvh]
          w-full
          max-w-2xl
          flex-col
          overflow-hidden
          rounded-t-[28px]
          bg-[#f5f5f2]
          text-[#171817]
          shadow-2xl

          sm:h-auto
          sm:max-h-[90dvh]
          sm:rounded-[28px]
        "
      >
        {/* ============================================================
            HEADER
        ============================================================ */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-black/[0.07]
            px-5
            py-4
            sm:px-7
          "
        >
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
            className="
              grid
              h-9
              w-9
              shrink-0
              cursor-pointer
              place-items-center
              rounded-full
              bg-white
              text-[#555555]
              transition-colors
              duration-200
              hover:bg-[#171817]
              hover:text-white
            "
          >
            <X size={17} />
          </button>
        </div>

        {/* ============================================================
            CONTENT
        ============================================================ */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-5
            py-6
            sm:px-8
            sm:py-7
          "
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Progress */}

          {step <= TOTAL_STEPS && (
            <EstimatorProgress
              currentStep={step}
              totalSteps={TOTAL_STEPS}
            />
          )}

          <AnimatePresence mode="wait" initial={false}>
            {/* ========================================================
                STEP 1
            ======================================================== */}

            {step === 1 && (
              <motion.div
                key="project-type"
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -12,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
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

            {/* ========================================================
                STEP 2
            ======================================================== */}

            {step === 2 && (
              <motion.div
                key="pages"
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -12,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
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

            {/* ========================================================
                STEP 3
            ======================================================== */}

            {step === 3 && (
              <motion.div
                key="design"
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -12,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
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

            {/* ========================================================
                STEP 4
            ======================================================== */}

            {step === 4 && (
              <motion.div
                key="features"
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -12,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
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

            {/* ========================================================
                STEP 5
            ======================================================== */}

            {step === 5 && (
              <motion.div
                key="timeline"
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -12,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
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

            {/* ========================================================
                RESULT
            ======================================================== */}

            {step === RESULT_STEP && estimate && (
              <motion.div
                key="result"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
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

        {/* ============================================================
            FOOTER
        ============================================================ */}

        {step <= TOTAL_STEPS && (
          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              gap-3
              border-t
              border-black/[0.07]
              bg-[#f5f5f2]
              px-5
              py-4
              sm:px-7
            "
          >
            {/* Back */}

            <button
              type="button"
              onClick={previousStep}
              disabled={step === 1}
              className="
                inline-flex
                h-11
                shrink-0
                cursor-pointer
                items-center
                gap-2
                rounded-full
                px-4
                text-sm
                font-semibold
                text-[#666666]
                transition-colors
                duration-200
                hover:bg-white
                hover:text-[#171817]
                disabled:pointer-events-none
                disabled:opacity-30
              "
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
              className="
                group
                inline-flex
                h-11
                shrink-0
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#171817]
                px-5
                text-sm
                font-semibold
                text-white
                transition-colors
                duration-200
                hover:bg-[#d8ff63]
                hover:text-[#171817]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              {step === TOTAL_STEPS
                ? "See my estimate"
                : "Continue"}

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProjectEstimator;