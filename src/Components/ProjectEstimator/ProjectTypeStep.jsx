import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Layout,
  Monitor,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const icons = {
  building: Building2,
  briefcase: BriefcaseBusiness,
  layout: Layout,
  "shopping-bag": ShoppingBag,
  monitor: Monitor,
  sparkles: Sparkles,
};

function ProjectTypeStep({ value, onChange }) {
  const options = [
    {
      id: "business",
      label: "Business website",
      description:
        "A professional website for your company or service.",
      icon: "building",
    },
    {
      id: "portfolio",
      label: "Portfolio / personal",
      description:
        "Showcase your work, experience, or personal brand.",
      icon: "briefcase",
    },
    {
      id: "landing",
      label: "Landing page",
      description:
        "A focused page designed around one clear goal.",
      icon: "layout",
    },
    {
      id: "store",
      label: "Online store",
      description:
        "Sell products or services online.",
      icon: "shopping-bag",
    },
    {
      id: "application",
      label: "Web application",
      description:
        "A custom platform, dashboard, or business system.",
      icon: "monitor",
    },
    {
      id: "other",
      label: "Something else",
      description:
        "Not quite sure? We'll figure it out together.",
      icon: "sparkles",
    },
  ];

  return (
    <div>
      <div className="mb-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7c9825]">
          Step 01
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] text-[#111111] sm:text-4xl">
          What are you looking to build?
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-[#777777]">
          Start with the type of project you have in mind.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option, index) => {
          const Icon = icons[option.icon];
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
                delay: index * 0.04,
              }}
              whileTap={{ scale: 0.98 }}
              className={`group rounded-2xl border p-4 text-left transition-all duration-200 ${
                selected
                  ? "border-[#171817] bg-[#171817] text-white"
                  : "border-black/[0.08] bg-white hover:border-black/[0.18] hover:bg-[#fafaf8]"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                    selected
                      ? "bg-[#d8ff63] text-[#171817]"
                      : "bg-[#f1f1ed] text-[#555555]"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
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
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectTypeStep;