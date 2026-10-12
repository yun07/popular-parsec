export const projects = [
{
  title: "Synthetic Environment & Data Generation Pipeline",
  slug: "synthetic-environment-data-pipeline",
  image: "/assets/synthetic-environment.png",
  video: "Q3zcQJY2bQc",

  description: [

    "Problem",
    "General-purpose world generators may struggle to provide precise control over specialised edge cases. Building dedicated generators can also require additional engineering work to connect them to downstream rendering, data export, and model evaluation workflows, increasing the cross-disciplinary skills required to deliver usable training data.",

    "Approach",
    "Designed an automated synthetic data pipeline that separates specialised environment generation from downstream data production. Developers can focus on creating Houdini operators for specific scenarios, while the shared pipeline handles rendering and dataset export through Houdini Engine and Unreal Engine. Built a procedural intersection generator as a demonstration of configurable, complex road-junction scenarios.",

    "Technical Highlights",
    "Integrated Houdini Engine with Unreal Engine for automated rendering and runtime data export, avoiding an intermediate USD-file workflow. Implemented checkpoint-based recovery, lock-file coordination to prevent duplicate file writes across servers, and error handling for Houdini Engine failures during rendering.",

    "Impact",
    "Established a reusable workflow for connecting specialised scenario generators to automated data production. The approach aims to reduce duplicated pipeline development and reliance on individuals with expertise spanning procedural generation, Unreal Engine, Python automation, and downstream ML workflows. Demonstrated the pipeline with an eight-class semantic segmentation task, achieving a best evaluation mIoU of 0.8745."
  ]
},

{
title: "Procedural Assembly Framework",
slug: "procedural-assembly-framework",
image: "/assets/Artboard1.png",
video: "HRG_wxbH-JM",

description: [

"Problem",
"Artists needed a way to generate modular structures quickly while still maintaining creative control. Fully random procedural generation was not suitable for production workflows.",

"Approach",
"Designed a procedural assembly framework that allows artists to construct complex structures using modular presets and rule-based generation.",

"Technical Highlights",
"- Tag-based modular asset system allowing artists to select procedural presets via a simple UI",
"- Intersection control system to safely combine multiple procedural containers",
"- Procedural internal structure generation for more complex assemblies",
"- Placement utilities enabling artists to build their own procedural modules",

"Impact",
"Enabled rapid environment generation while maintaining full artistic control. Significantly improved iteration speed and expanded the usability of procedural workflows for artists."
]
},

{
title: "Runtime Procedural Building System",
slug: "runtime-procedural-building",
image: "/assets/Artboard2.png",
video: "obk82-dtMSI",

description: [

"Problem",
"A UGC building system required runtime procedural generation that could maintain performance while providing intuitive building controls for players and creators.",

"Approach",
"Developed a runtime procedural building system with responsive architecture modules and custom manipulation tools to allow fast building generation and editing.",

"Technical Highlights",
"- Custom control gizmo for manipulating building footprint and height",
"- Responsive architectural modules including walls, windows, doors, and roof elements",
"- Automatic adaptation to varying building shapes and sizes",
"- Procedural generation of interior structures such as rooms and stairs",

"Impact",
"Delivered a scalable runtime building system for UGC creation. Creators can rapidly generate buildings while maintaining strong visual consistency and performance."
]
},

{
title: "Runtime Skinning Tool for UGC",
slug: "runtime-skinning-tool",
image: "/assets/Artboard3.png",
video: "oGftHyKeSig",

description: [

"Problem",
"A UGC character customization system required a flexible texture layering workflow while maintaining runtime performance and memory efficiency.",

"Approach",
"Developed a runtime skinning system supporting layered texture editing with optimized memory usage and intuitive manipulation tools.",

"Technical Highlights",
"- Texture layer compression system to reduce runtime memory footprint",
"- Layer-based skinning workflow for flexible character customization",
"- Interactive manipulation gizmo for editing skin layers in real time",
"- Optimized layer merging and rendering pipeline for smooth performance",

"Impact",
"Enabled a flexible character skinning workflow suitable for UGC systems. Creators can quickly customize character appearances while maintaining efficient runtime performance."
]
},

{
title: "Houdini Landscape Tool",
slug: "houdini-landscape-tool",
image: "/assets/Artboard5.png",
video: "WWqp0Zsk1co",

description: [

"Problem",
"Environment artists needed a faster way to generate landscapes while preserving a non-destructive workflow and maintaining control over terrain layout.",

"Approach",
"Developed a procedural landscape generation HDA in Houdini designed for artist-friendly workflows and rapid environment iteration.",

"Technical Highlights",
"- Automatic heightfield generation based on layout shapes",
"- Spline-based road path generation integrated into terrain generation",
"- Non-destructive procedural workflow allowing artists to quickly iterate terrain variations",

"Impact",
"Reduced environment production time and improved iteration speed. Landscape generation performance improved by approximately 60%."
]
},

{
title: "Wave Function Collapse Environment Generation",
slug: "wave-function-collapse",
image: "/assets/Artboard6.png",
video: "jQ0PkM4OCrM",

description: [

"Problem",
"Large environment spaces between playable areas required efficient background generation that maintained visual consistency with the main environment.",

"Approach",
"Implemented a procedural environment generation system based on the Wave Function Collapse algorithm to automatically assemble environment assets.",

"Technical Highlights",
"- Wave Function Collapse algorithm for rule-based environment generation",
"- Modular asset compatibility system ensuring valid placement combinations",
"- Artist control parameters for adjusting generation behavior",

"Impact",
"Allowed artists to rapidly generate large environment areas that blend seamlessly with playable spaces, improving both visual consistency and production efficiency."
]
}
];