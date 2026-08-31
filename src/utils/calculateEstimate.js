import { estimatorConfig } from "../Components/ProjectEstimator/estimatorConfig";

/*
|--------------------------------------------------------------------------
| Helper
|--------------------------------------------------------------------------
*/

function findItem(collection, id) {
  return collection?.find((item) => item.id === id);
}

/*
|--------------------------------------------------------------------------
| Calculate Project Estimate
|--------------------------------------------------------------------------
|
| This calculates the estimated investment based on the
| client's actual requirements.
|
*/

export function calculateEstimate(answers) {
  const projectType = findItem(
    estimatorConfig.projectTypes,
    answers.projectType
  );

  const pages = findItem(
    estimatorConfig.pages,
    answers.pages
  );

  const design = findItem(
    estimatorConfig.designs,
    answers.design
  );

  const timeline = findItem(
    estimatorConfig.timelines,
    answers.timeline
  );

  /*
   * Start with the selected project's base price.
   */

  let total = projectType?.base || 0;

  /*
   * Page complexity.
   */

  total += pages?.adjustment || 0;

  /*
   * Design complexity.
   */

  total += design?.adjustment || 0;

  /*
   * Additional features.
   */

  const selectedFeatures = answers.features || [];

  selectedFeatures.forEach((featureId) => {
    const feature = findItem(
      estimatorConfig.features,
      featureId
    );

    if (feature) {
      total += feature.adjustment;
    }
  });

  /*
   * Timeline / rush fee.
   */

  total += timeline?.adjustment || 0;

  /*
   * Round to the nearest ₱500.
   */

  total = Math.round(total / 500) * 500;

  /*
   * Create a realistic estimate range.
   *
   * We don't want to present this as an exact quotation.
   */

  const minimum =
    Math.round((total * 0.9) / 500) * 500;

  const maximum =
    Math.round((total * 1.1) / 500) * 500;

  /*
   * Determine package.
   */

  const recommendedPackage =
    getRecommendedPackage(answers, total);

  /*
   * Return everything the result page needs.
   */

  return {
    total,
    minimum,
    maximum,
    recommendedPackage,

    scope: {
      projectType: projectType?.label || null,
      pages: pages?.label || null,
      design: design?.label || null,
      features: selectedFeatures.map((featureId) => {
        const feature = findItem(
          estimatorConfig.features,
          featureId
        );

        return feature?.label;
      }).filter(Boolean),
      timeline: timeline?.label || null,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Recommended Package
|--------------------------------------------------------------------------
*/

export function getRecommendedPackage(
  answers,
  total = 0
) {
  const projectType = answers.projectType;
  const pages = answers.pages;
  const design = answers.design;
  const features = answers.features || [];

  /*
   * Professional
   *
   * Advanced systems and highly customized projects.
   */

  const professionalProject =
    projectType === "application";

  const professionalFeatures = [
    "accounts",
    "dashboard",
    "payments",
  ];

  const hasProfessionalFeature =
    features.some((feature) =>
      professionalFeatures.includes(feature)
    );

  if (
    professionalProject ||
    hasProfessionalFeature ||
    pages === "10-plus" ||
    design === "premium" ||
    total >= 25000
  ) {
    return "professional";
  }

  /*
   * Business
   */

  const businessProject =
    projectType === "store" ||
    pages === "5-7" ||
    pages === "8-10" ||
    design === "modern" ||
    features.length >= 3 ||
    total >= 15000;

  if (businessProject) {
    return "business";
  }

  /*
   * Starter
   */

  return "starter";
}

/*
|--------------------------------------------------------------------------
| Package Details
|--------------------------------------------------------------------------
*/

export function getPackageDetails(packageId) {
  return (
    estimatorConfig.packages[packageId] ||
    estimatorConfig.packages.starter
  );
}