export interface ProjectItem {
  id: string;
  title: string;
  category: "RESIDENTIAL" | "COMMERCIAL" | "STRUCTURAL BIM" | "BIM COORDINATION";
  scope: string;
  software: string[];
  deliverables: string[];
  overview: string;
  image: string;
  additionalImages?: string[];
  technicalSpecs?: { label: string; value: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "structural-rcc-bim-coordination",
    title: "INTELLIGENT STRUCTURAL BIM & RCC MODELING",
    category: "STRUCTURAL BIM",
    scope: "Structural BIM Development, Reinforcement Modeling & Coordination",
    software: ["Autodesk Revit", "AutoCAD", "Navisworks"],
    deliverables: ["LOD 350 Structural Revit Model", "Column & Beam Framing Plans", "Reinforcement Geometry Views", "Quantity Schedule Extraction"],
    overview: "Multi-story structural BIM modeling transformed from 2D structural consultant drawings into precise 3D Revit framing. Incorporates complete RCC column layouts, foundation footings, and structural beam systems with zero spatial clashes.",
    image: "/Pawan_Patil_BIM_Scroll_Sequence/preview/contact_sheet.jpg",
    technicalSpecs: [
      { label: "MODELING LOD", value: "LOD 350" },
      { label: "DISCIPLINE", value: "Structural / RCC" },
      { label: "FORMAT", value: "Revit (.RVT) / DWG" }
    ]
  },
  {
    id: "commercial-tower-bim",
    title: "COMMERCIAL BUILDING BIM INTEGRATION",
    category: "COMMERCIAL",
    scope: "Architectural & Structural Coordinated BIM Model",
    software: ["Autodesk Revit", "Navisworks Manage"],
    deliverables: ["Architectural Model", "Structural Framing", "2D Construction Sheets", "Clash Audit Log"],
    overview: "High-density commercial complex modeled for inter-disciplinary review. Architectural curtain walls, floor slabs, and structural shear walls aligned to ensure seamless constructability prior to site execution.",
    image: "/Pawan_Patil_BIM_Scroll_Sequence/preview/contact_sheet.jpg",
    technicalSpecs: [
      { label: "MODELING LOD", value: "LOD 300" },
      { label: "DISCIPLINE", value: "Arch + Struct" },
      { label: "FORMAT", value: "Revit (.RVT)" }
    ]
  },
  {
    id: "premium-residential-villa-bim",
    title: "PREMIUM RESIDENTIAL VILLA BIM & DRAFTING",
    category: "RESIDENTIAL",
    scope: "2D CAD to 3D Revit Architectural & Structural Model",
    software: ["Autodesk Revit", "AutoCAD"],
    deliverables: ["3D Revit Model", "Architectural Plans & Sections", "Elevation Drawings", "Door & Window Schedules"],
    overview: "Detailed residential project developed from hand-drafted concept drawings and 2D CAD layouts into a fully parametric Revit BIM environment with accurate material tags and section callouts.",
    image: "/Pawan_Patil_BIM_Scroll_Sequence/preview/contact_sheet.jpg",
    technicalSpecs: [
      { label: "MODELING LOD", value: "LOD 300" },
      { label: "DISCIPLINE", value: "Architectural BIM" },
      { label: "FORMAT", value: "Revit / DWG" }
    ]
  },
  {
    id: "multi-disciplinary-clash-coordination",
    title: "MULTI-DISCIPLINARY CLASH DETECTION & RESOLUTION",
    category: "BIM COORDINATION",
    scope: "Spatial Coordination, Clash Matrix & RFI Documentation",
    software: ["Navisworks Manage", "Autodesk Revit"],
    deliverables: ["Clash Matrix Report", "Coordinated Federated Model", "RFI Sheet Package"],
    overview: "Comprehensive clash detection analysis overlaying structural framing against architectural elements. Identified structural penetration conflicts and generated detailed RFIs for consultant approval.",
    image: "/Pawan_Patil_BIM_Scroll_Sequence/preview/contact_sheet.jpg",
    technicalSpecs: [
      { label: "MODELING LOD", value: "LOD 350" },
      { label: "DISCIPLINE", value: "Coordination" },
      { label: "FORMAT", value: "Navisworks (.NWD) / Revit" }
    ]
  }
];
