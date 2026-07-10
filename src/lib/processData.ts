export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Consultation",
    description: "A relaxed one-on-one to understand your hair, skin and lifestyle."
  },
  {
    id: 2,
    number: "02",
    title: "Curation",
    description: "Your artist curates a bespoke look using premium products and techniques."
  },
  {
    id: 3,
    number: "03",
    title: "Craft",
    description: "Executed with precision by senior artists using world-class products."
  },
  {
    id: 4,
    number: "04",
    title: "After Care",
    description: "Personalised home-care routine, follow-up scheduling and loyalty rewards."
  }
];
