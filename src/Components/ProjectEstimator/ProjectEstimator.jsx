
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";

import EstimatorProgress from "./EstimatorProgress";
import ProjectTypeStep from "./ProjectTypeStep";
import PagesStep from "./PagesStep";
import DesignStep from "./DesignStep";
import FeaturesStep from "./FeaturesStep";
import TimelineStep from "./TimelineStep";
import EstimateResult from "./EstimateResult";

import { calculateEstimate } from "../../utils/calculateEstimate";

const TOTAL_STEPS = 5;

const createInitialAnswers = () => ({
  projectType: "",
  pages: "",
  design: "",
  features: [],
  timeline: "",
});

function ProjectEstimator({
  isOpen,
  onClose,
  initialPackage = null,
  onRequestProject,
}) {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] =
    useState(createInitialAnswers);

  const [estimate, setEstimate] =
    useState(null);

  /*
  |--------------------------------------------------------------------------
  | Reset when opened
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setStep(1);
    setAnswers(createInitialAnswers());
    setEstimate(null);
  }, [isOpen]);

  /*
  |--------------------------------------------------------------------------
  | Prevent background scrolling
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const html =
      document.documentElement;

    const body =
      document.body;

    const previousHtmlOverflow =
      html.style.overflow;

    const previousBodyOverflow =
      body.style.overflow;

    const previousHtmlOverscroll =
      html.style.overscrollBehavior;

    const previousBodyOverscroll =
      body.style.overscrollBehavior;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    html.style.overscrollBehavior =
      "none";

    body.style.overscrollBehavior =
      "none";

    return () => {
      html.style.overflow =
        previousHtmlOverflow;

      body.style.overflow =
        previousBodyOverflow;

      html.style.overscrollBehavior =
        previousHtmlOverscroll;

      body.style.overscrollBehavior =
        previousBodyOverscroll;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  /*
  |--------------------------------------------------------------------------
  | Update answer
  |--------------------------------------------------------------------------
  */

  function updateAnswer(
    key,
    value
  ) {
    setAnswers((current) => ({
      ...current,
      [key]: value,
    }));
  }

  /*
  |--------------------------------------------------------------------------
  | Validate step
  |--------------------------------------------------------------------------
  */

  function canContinue() {
    switch (step) {
      case 1:
        return Boolean(
          answers.projectType
        );

      case 2:
        return Boolean(
          answers.pages
        );

      case 3:
        return Boolean(
          answers.design
        );

      case 4:
        return true;

      case 5:
        return Boolean(
          answers.timeline
        );

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
    if (!canContinue()) {
      return;
    }

    if (step === TOTAL_STEPS) {
      try {
        const result =
          calculateEstimate(
            answers
          );

        setEstimate(result);
        setStep(6);
      } catch (error) {
        console.error(
          "Project estimator error:",
          error
        );
      }

      return;
    }

    setStep(
      (current) =>
        Math.min(
          current + 1,
          TOTAL_STEPS
        )
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Previous step
  |--------------------------------------------------------------------------
  */

  function previousStep() {
    if (step === 6) {
      setStep(TOTAL_STEPS);
      return;
    }

    setStep(
      (current) =>
        Math.max(
          current - 1,
          1
        )
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Restart
  |--------------------------------------------------------------------------
  */

  function restartEstimator() {
    setStep(1);
    setAnswers(
      createInitialAnswers()
    );
    setEstimate(null);
  }

  /*
  |--------------------------------------------------------------------------
  | Request project
  |--------------------------------------------------------------------------
  */

  function handleRequestProject(
    data = {}
  ) {
    onRequestProject?.({
      ...data,
      answers,
      estimate,
      package: initialPackage,
    });
  }

  /*
  |--------------------------------------------------------------------------
  | Close backdrop
  |--------------------------------------------------------------------------
  */

  function handleBackdropClick(
    event
  ) {
    if (
      event.target ===
      event.currentTarget
    ) {
      onClose();
    }
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-end
        justify-center
        bg-black/45
        p-0
        sm:items-center
        sm:p-5
      "
      onMouseDown={
        handleBackdropClick
      }
    >
      {/* ================================================================
          MODAL
      ================================================================ */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 40,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseDown={(event) =>
          event.stopPropagation()
        }
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
        {/* ==============================================================
            HEADER
        ============================================================== */}

        <header
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
            <p className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#7c9825]
            ">
              Avance
            </p>

            <p className="
              mt-1
              text-[10px]
              text-[#999999]
            ">
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
              active:scale-95
            "
          >
            <X size={17} />
          </button>
        </header>

        {/* ==============================================================
            SCROLLABLE CONTENT
        ============================================================== */}

        <main
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-5
            py-6
            [-webkit-overflow-scrolling:touch]
            sm:px-8
            sm:py-7
          "
        >
          {step <= TOTAL_STEPS && (
            <EstimatorProgress
              currentStep={step}
              totalSteps={TOTAL_STEPS}
            />
          )}

          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {/* ==========================================================
                STEP 1
            ========================================================== */}

            {step === 1 && (
              <motion.div
                key="project-type"
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <ProjectTypeStep
                  value={
                    answers.projectType
                  }
                  onChange={(value) =>
                    updateAnswer(
                      "projectType",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ==========================================================
                STEP 2
            ========================================================== */}

            {step === 2 && (
              <motion.div
                key="pages"
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <PagesStep
                  value={
                    answers.pages
                  }
                  onChange={(value) =>
                    updateAnswer(
                      "pages",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ==========================================================
                STEP 3
            ========================================================== */}

            {step === 3 && (
              <motion.div
                key="design"
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <DesignStep
                  value={
                    answers.design
                  }
                  onChange={(value) =>
                    updateAnswer(
                      "design",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ==========================================================
                STEP 4
            ========================================================== */}

            {step === 4 && (
              <motion.div
                key="features"
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <FeaturesStep
                  value={
                    answers.features
                  }
                  onChange={(value) =>
                    updateAnswer(
                      "features",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ==========================================================
                STEP 5
            ========================================================== */}

            {step === 5 && (
              <motion.div
                key="timeline"
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <TimelineStep
                  value={
                    answers.timeline
                  }
                  onChange={(value) =>
                    updateAnswer(
                      "timeline",
                      value
                    )
                  }
                />
              </motion.div>
            )}

            {/* ==========================================================
                RESULT
            ========================================================== */}

            {step === 6 &&
              estimate && (
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
                  }}
                >
                  <EstimateResult
                    estimate={
                      estimate
                    }
                    onRestart={
                      restartEstimator
                    }
                    onRequestProposal={
                      handleRequestProject
                    }
                  />
                </motion.div>
              )}
          </AnimatePresence>
        </main>

        {/* ==============================================================
            FOOTER
        ============================================================== */}

        {step <= TOTAL_STEPS && (
          <footer
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
              pb-[calc(1rem+env(safe-area-inset-bottom))]
              sm:px-7
              sm:pb-4
            "
          >
            <button
              type="button"
              onClick={previousStep}
              disabled={step === 1}
              className="
                inline-flex
                h-11
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
                active:scale-95
                disabled:pointer-events-none
                disabled:opacity-30
              "
            >
              <ArrowLeft size={15} />
              Back
            </button>

            <motion.button
              type="button"
              onClick={nextStep}
              disabled={
                !canContinue()
              }
              whileTap={{
                scale: 0.97,
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
          </footer>
        )}
      </motion.div>
    </div>
  );
}

export default ProjectEstimator;