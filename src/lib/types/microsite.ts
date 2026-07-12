/** Shared shapes for microsite content modules. Brand files stay separate. */

export type NavLink = {
  label: string;
  href: string;
};

export type SeoMeta = {
  title: string;
  description: string;
  siteName?: string;
};

export type Cta = {
  label: string;
  href?: string;
};

export type MediaRef = {
  src: string;
  alt: string;
};

export type HeroBlock = {
  ctaPrimary?: Cta;
  ctaSecondary?: Cta;
  image?: MediaRef;
  support?: string;
  body?: string;
};

export type SectionBlock = {
  id?: string;
  kicker?: string;
  eyebrow?: string;
  headline?: string;
  body?: string;
  image?: MediaRef;
};
