import type { CaseStudy } from "@/lib/content";
import { CaseStudyApproach } from "@/components/sections/case-study/Approach";
import { CaseStudyChallenge } from "@/components/sections/case-study/Challenge";
import { CaseStudyHero } from "@/components/sections/case-study/Hero";
import { CaseStudyMeta } from "@/components/sections/case-study/Meta";
import { CaseStudyNext } from "@/components/sections/case-study/NextProject";
import { CaseStudyOutcomes } from "@/components/sections/case-study/Outcomes";
import { CaseStudyVisit } from "@/components/sections/case-study/Visit";

type CaseStudyPageProps = {
  project: CaseStudy;
  nextProject: CaseStudy;
};

/** Server-friendly shell — section reveals stay in client children. */
export function CaseStudyPage({ project, nextProject }: CaseStudyPageProps) {
  return (
    <main>
      <CaseStudyHero project={project} />
      <CaseStudyMeta project={project} />
      <CaseStudyChallenge project={project} />
      <CaseStudyApproach project={project} />
      <CaseStudyOutcomes project={project} />
      <CaseStudyVisit project={project} />
      <CaseStudyNext nextProject={nextProject} />
    </main>
  );
}
