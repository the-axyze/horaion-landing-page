export interface ServiceData {
  title: string,
  hero: {
    title: string;
    subtitle: string;
    badgeLabel?: string;
    ctaText: string;
    ctaLink: string;
    videoSrc?: string;
    imageSrc?: string;
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      title: string;
      description: string;
      icon?: string;
    }[];
    benefits?: string[];
  };
  howItWorks: {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: {
      stepNumber: number;
      title: string;
      description: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
}
