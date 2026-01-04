
export interface ServicePackage {
  id: string;
  name: string;
  hoursPerMonth: string;
  rate: string;
  validity: string;
  minTerm: string;
  description: string;
  bestFor: string[];
  whyWorks: string;
}

export interface AssessmentResult {
  packageId: string;
  reasoning: string;
  strategicInsight: string;
}
