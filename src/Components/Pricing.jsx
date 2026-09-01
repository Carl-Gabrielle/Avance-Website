import { useState } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import ProjectEstimator from "./ProjectEstimator/ProjectEstimator";

const packages = [
  {
    number: "01",
    id: "starter",
    name: "Starter",
    description:
      "A clean and professional website for businesses ready to get online.",
    price: "₱8,500+",
    popular: false,
    features: [
      "1–4 pages",
      "Responsive design",
      "Mobile optimization",
      "Contact / inquiry form",
      "Social media integration",
      "Basic SEO",
      "Website deployment",
    ],
    idealFor:
      "Small businesses • Local services • Personal brands",
  },
  {
    number: "02",
    id: "business",
    name: "Business",
    description:
      "A polished digital presence designed around your business and customers.",
    price: "₱13,500+",
    popular: true,
    features: [
      "Up to 7 pages",
      "Custom UI/UX",
      "Responsive design",
      "Contact & inquiry forms",
      "Basic SEO",
      "Google Analytics",
      "Social media integration",
      "Animations & interactions",
      "Website deployment",
    ],
    idealFor:
      "Startups • Restaurants • Shops • Professionals",
  },
  {
    number: "03",
    id: "professional",
    name: "Professional",
    description:
      "A more advanced website for businesses that need custom features and functionality.",
    price: "₱18,500+",
    popular: false,
    features: [
      "Up to 10+ pages",
      "Advanced UI/UX",
      "Custom animations",
      "CMS / editable content",
      "Advanced forms",
      "SEO optimization",
      "Analytics",
      "Performance optimization",
      "Deployment & configuration",
    ],
    idealFor:
      "Corporate • Real estate • Architecture • Growing businesses",
  },
];

function Pricing() {
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  function openEstimator(packageId = null) {
    setSelectedPackage(packageId);
    setEstimatorOpen(true);
  }

  function closeEstimator() {
    setEstimatorOpen(false);
  }

  function handleRequestProject(data) {
    console.log("Project request:", data);

    setEstimatorOpen(false);

    // Only scroll to contact when the user actually submits a project request.
    requestAnimationFrame(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  }

  return (
    <>
      <section
        id="pricing"
        className="
          border-y
          border-black/[0.07]
          bg-[#f5f5f2]
          px-5
          py-24
          text-[#171817]
          sm:px-8
          sm:py-32
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="max-w-2xl">
            <SectionLabel>
              Services & investment
            </SectionLabel>

            <h2
              className="
                mt-6
                text-balance
                text-4xl
                font-semibold
                leading-[0.98]
                tracking-[-0.06em]
                text-[#111111]
                sm:text-5xl
                lg:text-6xl
              "
            >
              A clear starting point for your next digital project.
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                font-medium
                leading-7
                text-[#666666]
                sm:text-lg
              "
            >
              Start with a package that fits your needs,
              or estimate your project based on the
              features, pages, and experience you want.
            </p>
          </div>

          {/* PRICING CARDS */}

          <div
            className="
              mt-12
              grid
              items-stretch
              gap-4
              lg:grid-cols-3
            "
          >
            {packages.map((item) => (
              <PricingCard
                key={item.id}
                item={item}
                onEstimate={() =>
                  openEstimator(item.id)
                }
              />
            ))}
          </div>

          {/* CUSTOM PROJECT */}

          <div
            className="
              mt-4
              flex
              flex-col
              justify-between
              gap-6
              rounded-[24px]
              border
              border-black/[0.08]
              bg-[#ebe9e2]
              p-6
              sm:flex-row
              sm:items-center
              sm:p-7
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#888888]
                "
              >
                Need something different?
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  tracking-[-0.05em]
                  text-[#111111]
                "
              >
                Custom projects
              </h3>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#666666]
                "
              >
                Web applications, dashboards, booking
                systems, business platforms, and other
                custom digital solutions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openEstimator(null)}
              className="
                group
                inline-flex
                shrink-0
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#171817]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition-colors
                duration-300
                hover:bg-[#d8ff63]
                hover:text-[#171817]
              "
            >
              Estimate custom project

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* NOTE */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-center
              text-xs
              leading-5
              text-[#999999]
            "
          >
            Package prices are starting points. Use the
            estimator to get an initial project range
            based on your requirements. Final pricing is
            confirmed after reviewing the project scope.
          </p>
        </div>
      </section>

      {/* ESTIMATOR */}

      <ProjectEstimator
        isOpen={estimatorOpen}
        onClose={closeEstimator}
        initialPackage={selectedPackage}
        onRequestProject={handleRequestProject}
      />
    </>
  );
}

function PricingCard({
  item,
  onEstimate,
}) {
  return (
    <article
      className={`
        group
        relative
        flex
        h-full
        min-h-[610px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        p-6
        sm:p-7
        ${
          item.popular
            ? "border-[#171817] bg-[#171817] text-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            : "border-black/[0.08] bg-white text-[#171817] shadow-[0_12px_40px_rgba(0,0,0,0.035)]"
        }
      `}
    >

      {/* POPULAR */}

      {item.popular && (
        <div
          className="
            absolute
            right-5
            top-5
            inline-flex
            items-center
            gap-1.5
            rounded-full
            bg-[#d8ff63]
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#171817]
          "
        >
          <Sparkles size={10} />
          Most popular
        </div>
      )}

      {/* NUMBER */}

      <span
        className={`
          text-[10px]
          font-bold
          tracking-[0.15em]
          ${
            item.popular
              ? "text-[#d8ff63]"
              : "text-[#7c9825]"
          }
        `}
      >
        {item.number}
      </span>

      {/* NAME */}

      <h3
        className="
          mt-5
          text-2xl
          font-semibold
          tracking-[-0.05em]
        "
      >
        {item.name}
      </h3>

      {/* DESCRIPTION */}

      <p
        className={`
          mt-2
          min-h-[60px]
          text-sm
          leading-6
          ${
            item.popular
              ? "text-white/55"
              : "text-[#666666]"
          }
        `}
      >
        {item.description}
      </p>

      {/* PRICE */}

      <div
        className={`
          mt-6
          border-t
          pt-6
          ${
            item.popular
              ? "border-white/10"
              : "border-black/[0.08]"
          }
        `}
      >
        <span
          className={`
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.15em]
            ${
              item.popular
                ? "text-white/35"
                : "text-[#888888]"
            }
          `}
        >
          Starting from
        </span>

        <div className="mt-1 flex items-baseline gap-2">
          <span
            className="
              text-4xl
              font-semibold
              tracking-[-0.06em]
            "
          >
            {item.price}
          </span>

          <span
            className={`
              text-xs
              ${
                item.popular
                  ? "text-white/30"
                  : "text-[#999999]"
              }
            `}
          >
            / project
          </span>
        </div>
      </div>

      {/* FEATURES */}

      <div
        className={`
          mt-6
          border-t
          pt-6
          ${
            item.popular
              ? "border-white/10"
              : "border-black/[0.08]"
          }
        `}
      >
        <p
          className={`
            text-[9px]
            font-bold
            uppercase
            tracking-[0.15em]
            ${
              item.popular
                ? "text-white/35"
                : "text-[#888888]"
            }
          `}
        >
          Includes
        </p>

        <ul className="mt-4 space-y-2.5">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="
                flex
                items-start
                gap-3
                text-sm
              "
            >
              <span
                className={`
                  mt-0.5
                  grid
                  h-4
                  w-4
                  shrink-0
                  place-items-center
                  rounded-full
                  ${
                    item.popular
                      ? "bg-[#d8ff63] text-[#171817]"
                      : "bg-[#8aaa2c]/10 text-[#7c9825]"
                  }
                `}
              >
                <Check
                  size={9}
                  strokeWidth={3}
                />
              </span>

              <span
                className={
                  item.popular
                    ? "text-white/70"
                    : "text-[#555555]"
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* IDEAL FOR */}

      <div
        className={`
          mt-6
          border-t
          pt-5
          ${
            item.popular
              ? "border-white/10"
              : "border-black/[0.08]"
          }
        `}
      >
        <p
          className={`
            text-xs
            leading-5
            ${
              item.popular
                ? "text-white/40"
                : "text-[#777777]"
            }
          `}
        >
          <span className="font-semibold">
            Ideal for:
          </span>{" "}
          {item.idealFor}
        </p>
      </div>

      {/* BUTTON */}

      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={onEstimate}
          className={`
            group/button
            flex
            h-12
            w-full
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-full
            px-5
            text-sm
            font-semibold
            transition-colors
            duration-300
            ${
              item.popular
                ? "bg-[#d8ff63] text-[#171817] shadow-[0_8px_25px_rgba(216,255,99,0.12)] hover:bg-white"
                : "bg-[#171817] text-white hover:bg-[#d8ff63] hover:text-[#171817]"
            }
          `}
        >
          <span>Estimate your project</span>

          <ArrowRight
            size={16}
            strokeWidth={2}
            className="
              transition-transform
              duration-300
              group-hover/button:translate-x-1
            "
          />
        </button>
      </div>
    </article>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        text-[10px]
        font-bold
        uppercase
        tracking-[0.2em]
        text-[#7c9825]
      "
    >
      <span className="h-px w-7 bg-[#a8cf32]" />

      {children}
    </div>
  );
}

export default Pricing;