export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  technicalNote: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "RECEIVE DRAWINGS / PROJECT BRIEF",
    description: "Client submits 2D CAD files (.DWG), hand sketches, structural layouts, or PDF documentation along with project requirements.",
    technicalNote: "INPUT: .DWG / PDF / SKETCH"
  },
  {
    number: "02",
    title: "REVIEW SCOPE & LOD",
    description: "Our technical team reviews project complexity, specifies the Level of Development (LOD 200–400), and defines modeling standards.",
    technicalNote: "SPEC: LOD 200 / 300 / 350 / 400"
  },
  {
    number: "03",
    title: "CONFIRM QUOTATION & TIMELINE",
    description: "Clear project quotation, milestone schedule, and delivery deadlines are established with transparent milestone billing.",
    technicalNote: "SCHEDULE & COMMERCIAL AGREEMENT"
  },
  {
    number: "04",
    title: "REVIT MODELING",
    description: "Parametric 3D BIM model construction commences in Autodesk Revit, building architectural and structural elements to scale.",
    technicalNote: "AUTODESK REVIT PARMETRIC BUILD"
  },
  {
    number: "05",
    title: "INTERNAL DRAWING / MODEL CHECK",
    description: "Quality assurance inspection conducted internally to audit dimensional consistency, family parameters, and drawing standards.",
    technicalNote: "QA / QC INTERNAL AUDIT"
  },
  {
    number: "06",
    title: "CLIENT REVIEW",
    description: "First model draft or interim sheet set delivered to client for design review, markup feedback, and consultant comments.",
    technicalNote: "CLIENT & CONSULTANT MARKUP"
  },
  {
    number: "07",
    title: "REVISIONS",
    description: "Prompt incorporation of client feedback, design revisions, structural modifications, or architectural updates.",
    technicalNote: "REVISION INCORPORATION & TRACKING"
  },
  {
    number: "08",
    title: "FINAL MODEL & DRAWINGS",
    description: "Delivery of clean native Revit (.RVT) models, exported DWG drawing packages, high-resolution PDF sets, and BIM schedules.",
    technicalNote: "DELIVERY: .RVT + .DWG + .PDF + SCHED"
  }
];
