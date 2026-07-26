/** Barrel re-export for marketing content modules. */
export {
  agency,
  navLinks,
  hero,
  intro,
  services,
  process,
  footer,
} from "./marketing/agency";

export {
  type CaseStudy,
  type CaseStudyApproach,
  type CaseStudySlug,
  type CaseStudyTone,
  caseStudies,
  getCaseStudy,
  getNextCaseStudy,
} from "./marketing/case-studies";

export { pricing, pricingAddOns } from "./marketing/pricing";
export { aboutPage } from "./marketing/about";
export { contact } from "./marketing/contact";
