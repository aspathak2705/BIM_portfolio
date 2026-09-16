export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  disciplines: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "revit-bim-modeling",
    number: "01",
    title: "REVIT BIM MODELING",
    shortDesc: "High-precision parametric 3D BIM models developed from conceptual sketches, CAD files, or point clouds.",
    fullDesc: "Complete parametric Revit BIM modeling tailored to specific Level of Development (LOD 100 to LOD 400). We construct data-rich building models that allow conflict resolution, quantity extraction, and seamless inter-disciplinary coordination.",
    deliverables: ["Parametric .RVT Models", "3D Views & Geometry", "LOD 200-400 Data Layers"],
    disciplines: ["Architecture", "Structure"]
  },
  {
    id: "architectural-bim",
    number: "02",
    title: "ARCHITECTURAL BIM MODELING",
    shortDesc: "Detailed spatial, envelope, and finish modeling for complex residential and commercial projects.",
    fullDesc: "Comprehensive architectural modeling encompassing walls, curtain systems, roofs, interior finishes, doors, windows, and custom millwork detailing aligned with architectural specifications.",
    deliverables: ["Architectural Revit Models", "Floor Plans & Sections", "Material Take-Off Schedules"],
    disciplines: ["Architecture"]
  },
  {
    id: "structural-bim",
    number: "03",
    title: "STRUCTURAL BIM MODELING",
    shortDesc: "Rigorous structural frame modeling including RCC, structural steel, foundations, and load-bearing elements.",
    fullDesc: "Precise engineering modeling of structural elements: cast-in-place concrete, post-tensioned slabs, structural steel trusses, columns, footings, and structural walls built strictly according to structural design calculations.",
    deliverables: ["Structural Framing Models", "RCC Geometry", "Steel Connection Framework"],
    disciplines: ["Structure"]
  },
  {
    id: "mep-coordination",
    number: "04",
    title: "MEP / COORDINATION SUPPORT",
    shortDesc: "Clash detection and multi-disciplinary model integration across Architectural, Structural, and MEP.",
    fullDesc: "Identification and resolution of spatial hard and soft clashes between structural members, ductwork, piping, and architectural elements prior to site construction to minimize expensive field modifications.",
    deliverables: ["Clash Matrix Reports", "Navisworks/Revit Coordination", "RFI Resolution Logs"],
    disciplines: ["Coordination", "Architecture", "Structure"]
  },
  {
    id: "2d-cad-drafting",
    number: "05",
    title: "2D CAD DRAFTING & DOCUMENTATION",
    shortDesc: "Production-ready AutoCAD drawings, structural drafting, section details, and approval sets.",
    fullDesc: "High-precision 2D drafting services converted from hand sketches, PDF markups, or raw survey data with strict CAD standards, standardized layering, and clear dimensioning.",
    deliverables: ["AutoCAD .DWG Sets", "Permit & Municipal Drawings", "Construction Details"],
    disciplines: ["Documentation", "CAD"]
  },
  {
    id: "revit-family-creation",
    number: "06",
    title: "REVIT FAMILY / COMPONENT CREATION",
    shortDesc: "Custom parametric Revit families (.RFA) for building product manufacturers, architects, and engineers.",
    fullDesc: "Creation of lightweight, high-detail parametric Revit families with configurable dimensions, materials, identity data, and OmniClass/Uniclass classifications.",
    deliverables: ["Parametric .RFA Files", "Catalog Components", "Custom Profile Libraries"],
    disciplines: ["Revit", "Architecture"]
  },
  {
    id: "construction-documentation",
    number: "07",
    title: "CONSTRUCTION DOCUMENTATION",
    shortDesc: "Fully annotated CD sets, wall sections, enlargement details, and schedules directly extracted from BIM.",
    fullDesc: "Extraction of coordinated 2D construction sheets directly from the 3D BIM model ensuring 100% synchronization between plans, sections, elevations, and schedules.",
    deliverables: ["Coordinated Sheet Packages", "Wall & Door Schedules", "Detail Callouts"],
    disciplines: ["Documentation"]
  },
  {
    id: "3d-visualization",
    number: "08",
    title: "3D MODELING & VISUALIZATION",
    shortDesc: "Photorealistic architectural renderings and walk-through presentations derived directly from BIM geometry.",
    fullDesc: "High-impact architectural visual representations, exterior/interior renders, and materials showcase for client presentations, marketing, and approval processes.",
    deliverables: ["High-Res Renderings", "3D Sectional Cutaways", "Material Board Visuals"],
    disciplines: ["Visualization"]
  },
  {
    id: "bim-conversion",
    number: "09",
    title: "BIM MODEL CONVERSION / DEVELOPMENT",
    shortDesc: "Legacy CAD to BIM conversion, point-cloud to BIM (Scan to BIM), and 2D drawing vectorization.",
    fullDesc: "Transforming 2D legacy paper drawings, PDF blueprints, or laser scan point cloud data into intelligent, editable 3D Revit models with verified dimensional accuracy.",
    deliverables: ["Scan/CAD to Revit conversion", "Historical Drawing Digitization", "As-Built BIM Models"],
    disciplines: ["BIM Conversion"]
  },
  {
    id: "outsourcing-support",
    number: "10",
    title: "OUTSOURCING SUPPORT",
    shortDesc: "Dedicated virtual BIM modeling team and project-based engineering drafting extensions.",
    fullDesc: "Flexible collaboration models for overseas architectural firms, structural engineering consultants, and contractors seeking scalable, cost-effective BIM drafting bandwidth.",
    deliverables: ["Dedicated BIM Team", "Project-Based Modeling", "Flexible Resource Allocation"],
    disciplines: ["Outsourcing"]
  }
];
