import { motion } from "framer-motion";
import { ArrowUpRight, Circle, Sparkles } from "lucide-react";

function DesignStep({ value, onChange }) {
  const options = [
    {
      id: "clean",
      label: "Clean & professional",
      description:
        "Simple, polished, and focused on clarity.",
    },
    {
      id: "modern",
      label: "Modern & interactive",
      description:
        "Contemporary layouts, motion, and interactions.",
    },
    {
      id: "premium",
      label: "Premium & highly customized",
      description:
        "A distinctive experience built around your brand.",
    },
  ];

  return (
    <div>
      <div className="mb-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7c9825]">
          Step 03
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] text-[#111111] sm:text-4xl">
          How should it feel?
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-[#777777]">
          Choose the level of visual customization you're looking for.
        </p>
      </div>

      <div className="space-y-3">
        {options.map((option, index) => {
          const selected = value === option.id;

          return (
            <motion.button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
              }}
              whileTap={{ scale: 0.99 }}
              className={`group flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-all duration-200 ${
                selected
                  ? "border-[#171817] bg-[#171817] text-white"
                  : "border-black/[0.08] bg-white hover:border-black/[0.18]"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full ${
                    selected
                      ? "bg-[#d8ff63] text-[#171817]"
                      : "bg-[#f1f1ed] text-[#777777]"
                  }`}
                >
                  {option.id === "premium" ? (
                    <Sparkles size={17} />
                  ) : option.id === "modern" ? (
                    <ArrowUpRight size={17} />
                  ) : (
                    <Circle size={14} />
                  )}
                </span>

                <span>
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
                </span>
              </div>

              <span
                className={`hidden text-[9px] font-bold uppercase tracking-[0.14em] sm:block ${
                  selected
                    ? "text-[#d8ff63]"
                    : "text-[#aaaaaa]"
                }`}
              >
                {selected ? "Selected" : "Choose"}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default DesignStep;