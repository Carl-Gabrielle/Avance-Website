import { motion } from "framer-motion";
import {
  BarChart3,
  CalendarDays,
  CreditCard,
  FileEdit,
  FormInput,
  LayoutDashboard,
  MousePointer2,
  Users,
} from "lucide-react";

const icons = {
  contact: FormInput,
  booking: CalendarDays,
  cms: FileEdit,
  payments: CreditCard,
  accounts: Users,
  dashboard: LayoutDashboard,
  animations: MousePointer2,
  analytics: BarChart3,
};

function FeaturesStep({ value, onChange }) {
  const options = [
    {
      id: "contact",
      label: "Contact forms",
      description: "Let visitors get in touch.",
    },
    {
      id: "booking",
      label: "Booking system",
      description: "Appointments or reservations.",
    },
    {
      id: "cms",
      label: "CMS / editable content",
      description: "Manage content without code.",
    },
    {
      id: "payments",
      label: "Online payments",
      description: "Accept payments online.",
    },
    {
      id: "accounts",
      label: "User accounts",
      description: "Login and registration.",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      description: "Admin or internal management.",
    },
    {
      id: "animations",
      label: "Animations & interactions",
      description: "Motion and interactive UI.",
    },
    {
      id: "analytics",
      label: "Analytics",
      description: "Track website activity.",
    },
  ];

  function toggleFeature(id) {
    if (value.includes(id)) {
      onChange(value.filter((item) => item !== id));
      return;
    }

    onChange([...value, id]);
  }

  return (
    <div>
      <div className="mb-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7c9825]">
          Step 04
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] text-[#111111] sm:text-4xl">
          What should it include?
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-[#777777]">
          Select everything you think you'll need. You can always change this later.
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((option, index) => {
          const selected = value.includes(option.id);
          const Icon = icons[option.id];

          return (
            <motion.button
              key={option.id}
              type="button"
              onClick={() => toggleFeature(option.id)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.035,
              }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 ${
                selected
                  ? "border-[#171817] bg-[#171817] text-white"
                  : "border-black/[0.08] bg-white hover:border-black/[0.16]"
              }`}
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
                  selected
                    ? "bg-[#d8ff63] text-[#171817]"
                    : "bg-[#f1f1ed] text-[#777777]"
                }`}
              >
                <Icon size={16} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs font-semibold">
                  {option.label}
                </span>

                <span
                  className={`mt-0.5 block text-[11px] leading-4 ${
                    selected
                      ? "text-white/50"
                      : "text-[#999999]"
                  }`}
                >
                  {option.description}
                </span>
              </span>

              <span
                className={`ml-auto h-4 w-4 shrink-0 rounded-full border ${
                  selected
                    ? "border-[#d8ff63] bg-[#d8ff63]"
                    : "border-black/10"
                }`}
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturesStep;