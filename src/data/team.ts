export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  isFounder?: boolean;
}

export const founderData: TeamMember = {
  id: "pawan-patil",
  name: "Er. Pawan G. Patil",
  role: "Founder & Principal BIM / Structural Specialist",
  expertise: [
    "Revit Structural & Architectural BIM",
    "2D CAD to 3D BIM Transformation",
    "Inter-Disciplinary Coordination",
    "Engineering Documentation"
  ],
  bio: "Er. Pawan G. Patil leads Pawan Patil & Associates with a sharp focus on engineering accuracy and intelligent BIM workflows. Combining deep structural understanding with advanced Revit capabilities, he bridges the gap between traditional 2D consultant drawings and high-performance 3D BIM models.",
  isFounder: true
};

export const teamData: TeamMember[] = [
  founderData,
  {
    id: "bim-structural-lead",
    name: "Structural BIM Specialist Team",
    role: "Structural Modeling & RCC Detailing",
    expertise: ["Revit Structure", "RCC Framing", "Steel Detailing", "Quantity Schedules"],
    bio: "Dedicated engineering team specializing in cast-in-place concrete, column/beam reinforcement modeling, and structural framing alignment."
  },
  {
    id: "bim-architectural-lead",
    name: "Architectural BIM & CAD Team",
    role: "Architectural Modeling & Drafting",
    expertise: ["Revit Architecture", "AutoCAD", "Parametric Families", "CD Documentation Sets"],
    bio: "Skilled BIM modelers focused on detailed architectural envelopes, municipal approval drawings, and high-precision CAD drafting."
  }
];
