import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  caseStudies,
  getCaseStudy,
  getNextCaseStudy,
} from "@/lib/content";
import { CaseStudyPage } from "@/components/sections/CaseStudyPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    return { title: "Case study" };
  }

  return {
    title: `${project.title} — Case study`,
    description: project.brief,
  };
}

export default async function CaseStudyRoute({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextCaseStudy(slug);

  return <CaseStudyPage project={project} nextProject={nextProject} />;
}
