import { ReactNode } from 'react';

export interface WhyChooseItem {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  detailedDescription: string;
}

export interface InteractiveWhyChooseProps {
  className?: string;
}

export interface DefaultContent {
  title: string;
  description: string;
  cta: string;
}

export interface TextContentProps {
  title: string;
  description: string;
  cta: string;
  isTransitioning?: boolean;
}