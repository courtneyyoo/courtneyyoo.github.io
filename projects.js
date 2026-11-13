// ============================================================
//  YOUR PROJECTS LIVE HERE
//  To add a project: copy one { ... } block, paste it below the
//  others, and change the text. Save, then refresh the page.
//
//  type:     short label shown on the card, e.g. "Client project"
//  areas:    which filters it appears under. Any of:
//            "ux" (UX/UI Design), "dev" (Development), "mobile" (Mobile)
//  year:     optional. Leave as "" to hide it.
//  role:     what you did (one short line)
//  details:  2–3 sentences about the project and key decisions
//  tools:    tools and methods only (avoid repeating the role)
//  image:    put the picture in the images/ folder and write its
//            name here, e.g. "images/my-project.png".
//            Leave it as "" to show a colored placeholder.
//  screens:  (optional) phone screenshots, shown side by side
//            instead of a single image, e.g. for a mobile app.
//  gallery:  (optional) extra images shown in the pop-up.
//  links:    leave a link as "" to hide that button.
// ============================================================

const PROJECTS = [
  {
    title: "4PM Planner",
    type: "Product · Design & build",
    areas: ["ux", "dev", "mobile"],
    year: "2026",
    role: "Product design · Mobile development",
    summary: "A family planner app that tracks kids' activities, who's driving, and what to bring.",
    details:
      "Parents see each child's week at a glance, colour-coded by kid, with who's driving and a \"Don't forget\" list on every event. Recurring events, month and week views and timed reminders run on iOS, Android and the web from one codebase. The trickiest part was making reminders fire exactly on time, including across daylight-saving changes.",
    tools: ["React Native", "Expo", "TypeScript", "Supabase"],
    image: "",
    screens: ["images/4pm-today.jpg", "images/4pm-calendar.png", "images/4pm-event.png"],
    color: "#f2a65a",
    links: { live: "4pm-demo/", liveLabel: "Try the demo", code: "" },
    note: "The demo runs in your browser. Tap \"Explore with a sample family\" to see it with example data. Anything you add stays only on your device.",
  },
  {
    title: "Red Brick Playhouse",
    type: "Client project",
    areas: ["ux", "dev"],
    year: "",
    role: "Web design · Squarespace build · Branding & content",
    summary: "A warm, playful website for a children's art studio, with programs, camps and online registration.",
    details:
      "Families can browse age-based programs and summer camps and register online. I designed the site and built it on Squarespace, adding custom CSS and JavaScript where the templates fell short, and worked on the branding and content around a warm cream and brick-red palette.",
    tools: ["Squarespace", "CSS", "JavaScript"],
    image: "images/mock-redbrick.png",
    color: "#6b1a10",
    links: { live: "https://www.redbrickplayhouse.com/", liveLabel: "Visit the live site", code: "" },
    gallery: [
      { src: "images/redbrick-home.jpg", caption: "Homepage" },
      { src: "images/redbrick-mobile.png", caption: "Homepage on mobile" },
      { src: "images/redbrick-altplay.jpg", caption: "Program page: ALT Play" },
    ],
    note: "The client has since edited the live site. These screens show the original design, with its spacing and layout cleaned up for this portfolio.",
  },
  {
    title: "Windback",
    type: "UX case study",
    areas: ["ux", "mobile"],
    year: "2026",
    role: "UX research · UI design · Prototyping",
    summary: "A mobile app for buying disposable cameras and mailing them back for film development.",
    details:
      "Users compare disposable cameras by photo style, buy one, mail it back prepaid, and get their photos digitally and as prints. Research showed everyone loved the film look, but 83% found mailing or dropping off film the biggest hurdle. A persona, journey map and user flow shaped the wireframes; in the final design I moved Add to Cart above the photo previews so the main action is visible without scrolling.",
    tools: ["Interviews & surveys", "Personas", "Journey mapping", "Wireframing", "Figma"],
    image: "",
    screens: [
      "images/windback-home.jpg",
      "images/windback-shop.jpg",
      "images/windback-detail.jpg",
      "images/windback-delivery.jpg",
      "images/windback-cart.jpg",
    ],
    color: "#4a423c",
    links: { live: "https://www.figma.com/proto/9I3gz6tiKocqBQda4BbaIq/Windback-App-Prototype?node-id=16-6", liveLabel: "Try the prototype", code: "" },
    galleryTitle: "Research & process",
    gallery: [
      { src: "images/windback-research.jpg", caption: "Research insights" },
      { src: "images/windback-journey.jpg", caption: "Journey map" },
      { src: "images/windback-userflow.jpg", caption: "User flow" },
      { src: "images/windback-styleguide.jpg", caption: "Style guide" },
    ],
  },
  {
    title: "Canvas Club",
    type: "Interactive prototype",
    areas: ["ux"],
    year: "2026",
    role: "UI design · Interactive prototyping",
    summary: "A custom tote bag shop where shoppers pick a bag colour and print and preview it live.",
    details:
      "A desktop shop where customers design their own tote and watch it update as they choose a colour and print. The prototype is built on reusable components with variants: an active-state navbar, a hero carousel, colour and print pickers, gallery filters and a cart overlay.",
    tools: ["Figma", "Wireframing", "Components & variants"],
    image: "images/mock-canvasclub.png",
    color: "#e98c78",
    links: { live: "", code: "" },
    galleryTitle: "Screens",
    gallery: [
      { src: "images/canvasclub-home.jpg", caption: "Homepage" },
      { src: "images/canvasclub-customize.jpg", caption: "Customize page" },
      { src: "images/canvasclub-cart.jpg", caption: "Cart overlay" },
      { src: "images/canvasclub-gallery.jpg", caption: "Gallery with category filters" },
    ],
    note: "Product and gallery images were generated with AI.",
  },
  {
    title: "West Coast Rail Tours",
    type: "Client project",
    areas: ["ux", "dev"],
    year: "",
    role: "Web design · WordPress development",
    summary: "A custom WordPress website for a travel agency specializing in rail travel.",
    details:
      "Tours are organized by region (Canada, USA and international), and a trip planner lets visitors request quotes for round-trip, one-way or multi-city journeys. A custom theme matched the brand exactly while keeping content easy for the client to update.",
    tools: ["WordPress", "PHP", "JavaScript"],
    image: "images/mock-wcrt.png",
    color: "#6b8f5e",
    links: { live: "", code: "" },
  },
  {
    title: "BCIT TSP Program Website",
    type: "Launched redesign",
    areas: ["ux", "dev"],
    year: "",
    role: "UX/UI redesign · Front-end development",
    summary: "A redesign of the program's website, chosen from competing proposals and launched as the official site.",
    details:
      "The redesign puts the most-used sections (schedule, faculty, courses, IT certifications and resources) up front, in a layout that adapts from desktop to phone. It was chosen from a field of competing proposals and launched as BCIT's official site for the Technology Support Professional program.",
    tools: ["Responsive design", "HTML", "CSS", "PHP"],
    image: "images/mock-tsp.png",
    color: "#b5562a",
    links: { live: "", code: "" },
  },
  {
    title: "I ♥ Audrey",
    type: "Design & build",
    areas: ["ux", "dev"],
    year: "",
    role: "Web design · Front-end development",
    summary: "A fully responsive photo blog celebrating Audrey Hepburn.",
    details:
      "A black-and-white masonry photo grid that reflows from a desktop sidebar layout to a compact mobile view, designed and coded from scratch.",
    tools: ["HTML", "CSS", "JavaScript"],
    image: "images/mock-audrey.png",
    color: "#333333",
    links: { live: "archive/audrey/", liveLabel: "View the site", code: "" },
  },
  {
    title: "Vintage Camera",
    type: "School project",
    areas: ["ux", "dev"],
    year: "",
    role: "Web design · Front-end development",
    summary: "A catalog website concept for a vintage camera shop.",
    details:
      "A five-page catalog site for a fictional vintage camera shop. A badge-style logo, textured paper background, thin rules and soft pink accents set an analogue mood, while simple navigation keeps the cameras front and centre.",
    tools: ["HTML", "CSS"],
    image: "images/mock-vintage.png",
    color: "#e46a7a",
    links: { live: "archive/vintage-camera/", liveLabel: "View the site", code: "" },
  },
];
