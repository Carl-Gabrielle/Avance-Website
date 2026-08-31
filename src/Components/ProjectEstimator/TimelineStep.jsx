import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";

function TimelineStep({ value, onChange }) {
  const options = [
    {
      id: "flexible",
      label: "I'm flexible",
      description: "No specific launch date.",
    },
    {
      id: "1-2-months",
      label: "1–2 months",
      description: "A comfortable project timeline.",
    },
    {
      id: "2-4-weeks",
      label: "2–4 weeks",
      description: "I'd like to launch fairly soon.",
    },
    {
      id: "asap",
      label: "As soon as possible",
      description: "I need the project prioritized.",
    },
  ];

  return (
    <div>
      <div className="mb-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7c9825]">
          Step 05
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] text-[#111111] sm:text-4xl">
          When would you like to launch?
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-[#777777]">
          This helps us understand your timeline and project priority.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option, index) => {
          const selected = value === option.id;

          return (
            <motion.button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                selected
                  ? "border-[#171817] bg-[#171817] text-white"
                  : "border-black/[0.08] bg-white hover:border-black/[0.18]"
              }`}
            >
              <span
                className={`mb-4 grid h-9 w-9 place-items-center rounded-xl ${
                  selected
                    ? "bg-[#d8ff63] text-[#171817]"
                    : "bg-[#f1f1ed] text-[#777777]"
                }`}
              >
                <Clock3 size={16} />
              </span>

              <span className="block text-sm font-semibold">
                {option.label}
              </span>

              <span
                className={`mt-1 block text-xs leading-5 ${
                  selected
                    ? "text-white/55"
                    : "text-[#888888]"
                }`}
              >
                {option.description}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default TimelineStep;