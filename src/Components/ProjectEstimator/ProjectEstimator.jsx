
import { useEffect, useState } from "react";
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
  | Lock background scrolling
  |--------------------------------------------------------------------------
  |
  | IMPORTANT:
  | We intentionally DO NOT use:
  |
  | body.style.position = "fixed"
  | body.style.top = ...
  | window.scrollTo(...)
  |
  | Those techniques can cause mobile browsers to jump
  | to another scroll position when the modal closes.
  |
  | The modal itself is fixed, so overflow locking is enough.
  |
  */

  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
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
    if (!canContinue()) {
      return;
    }

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
  | Previous step
  |--------------------------------------------------------------------------
  */

  function previousStep() {
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
  | Restart
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
  | Request project
  |--------------------------------------------------------------------------
  */

  function handleRequestProject(data = {}) {
    onRequestProject?.({
      ...data,
      answers,
      estimate,
    });
  }

  /*
  |--------------------------------------------------------------------------
  | Backdrop click
  |--------------------------------------------------------------------------
  */

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
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
        sm:items-center
        sm:p-5
      "
      onMouseDown={handleBackdropClick}
    >
      {/* ================================================================
          MODAL
      ================================================================ */}

      <div
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
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        {/* ==============================================================
            HEADER
        ============================================================== */}

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
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#7c9825]
              "
            >
              Avance
            </p>

            <p
              className="
                mt-1
                text-[10px]
                text-[#999999]
              "
            >
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
              cursor-pointer
              place-items-center
              rounded-full
              bg-white
              text-[#555555]
              transition-colors
              hover:bg-[#171817]
              hover:text-white
            "
          >
            <X size={17} />
          </button>
        </div>

        {/* ==============================================================
            CONTENT
        ============================================================== */}

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
        >
          {/* Progress */}

          {step <= TOTAL_STEPS && (
            <EstimatorProgress
              currentStep={step}
              totalSteps={TOTAL_STEPS}
            />
          )}

          {/* Step 1 */}

          {step === 1 && (
            <ProjectTypeStep
              value={answers.projectType}
              onChange={(value) =>
                updateAnswer(
                  "projectType",
                  value
                )
              }
            />
          )}

          {/* Step 2 */}

          {step === 2 && (
            <PagesStep
              value={answers.pages}
              onChange={(value) =>
                updateAnswer(
                  "pages",
                  value
                )
              }
            />
          )}

          {/* Step 3 */}

          {step === 3 && (
            <DesignStep
              value={answers.design}
              onChange={(value) =>
                updateAnswer(
                  "design",
                  value
                )
              }
            />
          )}

          {/* Step 4 */}

          {step === 4 && (
            <FeaturesStep
              value={answers.features}
              onChange={(value) =>
                updateAnswer(
                  "features",
                  value
                )
              }
            />
          )}

          {/* Step 5 */}

          {step === 5 && (
            <TimelineStep
              value={answers.timeline}
              onChange={(value) =>
                updateAnswer(
                  "timeline",
                  value
                )
              }
            />
          )}

          {/* Result */}

          {step === 6 && estimate && (
            <EstimateResult
              estimate={estimate}
              onRestart={restartEstimator}
              onRequestProposal={
                handleRequestProject
              }
            />
          )}
        </div>

        {/* ==============================================================
            FOOTER
        ============================================================== */}

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
                cursor-pointer
                items-center
                gap-2
                rounded-full
                px-4
                text-sm
                font-semibold
                text-[#666666]
                transition-colors
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

            <button
              type="button"
              onClick={nextStep}
              disabled={!canContinue()}
              className="
                inline-flex
                h-11
                cursor-pointer
                items-center
                gap-2
                rounded-full
                bg-[#171817]
                px-5
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-[#d8ff63]
                hover:text-[#171817]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              {step === TOTAL_STEPS
                ? "See my estimate"
                : "Continue"}

              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectEstimator;