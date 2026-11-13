// ============================================================
//  YOUR PROJECTS LIVE HERE
//  To add a project: copy one { ... } block, paste it below the
//  others, and change the text. Save, then refresh the page.
//
//  type:     short label shown on the card, e.g. "Client project"
//  areas:    which filters it appears under. Any of:
//            "ux" (UX/UI Design), "dev" (Development), "mobile" (Mobile)
//  year:     optional. Leave as "" to hide it.
//  image:    put the picture in the images/ folder and write its
//            name here, e.g. "images/my-project.png".
//            Leave it as "" to show a colored placeholder.
//  screens:  (optional) phone screenshots, shown side by side
//            instead of a single image, e.g. for a mobile app.
//  gallery:  (optional) process images shown in the pop-up.
//  links:    leave a link as "" to hide that button.
// ============================================================

const PROJECTS = [
  {
    title: "4PM Planner",
    type: "Product · Design & build",
    areas: ["ux", "dev", "mobile"],
    year: "2026",
    role: "Product design · UX/UI · Mobile development",
    summary: "A family planner app that tracks kids' activities, who's driving, and what to bring.",
    details:
      "I took 4PM Planner from idea to working product, designing the experience and building the app myself. Parents see each child's activities at a glance, colour-coded by kid, with drop-off and pickup assignments and a \"Don't forget\" list for every event. It supports weekly recurring events, a month and week calendar, and reminders before each event and pickup, and it runs on iOS, Android and the web from one codebase. The toughest problem was making reminders fire at exactly the right time, including across daylight-saving changes and Android's exact-alarm permission.",
    tools: ["UX/UI design", "React Native", "Expo", "TypeScript", "Supabase"],
    image: "",
    screens: ["images/4pm-today.jpg", "images/4pm-calendar.png", "images/4pm-event.png"],
    color: "#f2a65a",
    links: { live: "4pm-demo/", liveLabel: "Try the demo", code: "" },
    note: "The demo runs in your browser. Tap \"Explore with a sample family\" to see it with example data. Anything you add stays only on your device.",
  },
  {
    title: "Windback",
    type: "UX case study",
    areas: ["ux", "mobile"],
    year: "2026",
    role: "UX research · UI design · Prototyping",
    summary: "A mobile app for buying disposable cameras and mailing them back for film development.",
    details:
      "Windback is a mobile app that makes film photography easy from start to finish. Users compare disposable cameras by photo style, buy one, mail it back with prepaid shipping, and get their photos digitally and as prints. I started with research: a questionnaire and two interviews showed that everyone loved the grainy vintage look, but 83% said mailing or dropping off film was the biggest barrier, and all of them wanted one app to handle it all. From there I built a persona, a user scenario and a journey map, mapped the user flow, then designed the screens and a clickable prototype in Figma. Moving from wireframes to the final design, I moved the Add to Cart button above the photo-style previews so the main action is visible without scrolling.",
    tools: ["User research", "Personas", "Journey mapping", "User flows", "Figma", "Prototyping"],
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
    gallery: [
      { src: "images/windback-research.jpg", caption: "Research insights from 6 questionnaire responses and 2 interviews" },
      { src: "images/windback-journey.jpg", caption: "Journey map, from discovering film to receiving photos" },
      { src: "images/windback-userflow.jpg", caption: "User flow covering shopping, checkout and delivery" },
      { src: "images/windback-styleguide.jpg", caption: "Style guide: colours, type and components" },
    ],
  },
  {
    title: "Canvas Club",
    type: "Interactive prototype",
    areas: ["ux"],
    year: "2026",
    role: "UI design · Component systems · Interactive prototyping",
    summary: "A custom tote bag shop where shoppers pick a bag colour and print and preview it live.",
    details:
      "Canvas Club is a desktop e-commerce website where shoppers design their own tote bag. I designed and prototyped it in Figma around a reusable component system: a navbar that shows the active page, a hero carousel on the Home page, colour and print pickers (four variants each) that update the bag preview in real time, a Gallery page with working category filters, and a cart overlay that opens from the cart icon and buttons. I started from hand-drawn wireframes and refined them into the final interactive design.",
    tools: ["Figma", "Components & variants", "Interactive prototyping", "Wireframing"],
    image: "images/canvasclub-hero.jpg",
    fit: "cover",
    color: "#e98c78",
    links: { live: "", code: "" },
    gallery: [
      { src: "images/canvasclub-hero2.jpg", caption: "Home page hero carousel, slide 2" },
      { src: "images/canvasclub-hero3.jpg", caption: "Home page hero carousel, slide 3" },
      { src: "images/canvasclub-wireframe.jpg", caption: "Hand-drawn wireframes: Home, Product, Gallery and Cart overlay" },
    ],
    note: "Product and gallery images were generated with AI.",
  },
  {
    title: "West Coast Rail Tours",
    type: "Client project",
    areas: ["ux", "dev"],
    year: "",
    role: "Web design · Custom WordPress development",
    summary: "A custom WordPress website for a travel agency specializing in rail travel.",
    details:
      "I designed and built a custom WordPress theme for West Coast Rail Tours, a travel agency that specializes in rail travel. The site organizes tours by region (Canada, USA and international) and includes a trip planner that lets visitors request a quote for round-trip, one-way or multi-city journeys. Building it as a custom theme gave the client a site that matched their brand exactly while staying easy for them to update.",
    tools: ["Web design", "WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    image: "images/west-coast-rail-tours.jpg",
    color: "#6b8f5e",
    links: { live: "", code: "" },
  },
  {
    title: "BCIT Technology Support Professional Program",
    type: "Launched redesign",
    areas: ["ux", "dev"],
    year: "",
    role: "UX/UI redesign · Responsive front-end development",
    summary: "A redesign of the program's website, chosen from competing proposals and launched as the official site.",
    details:
      "I redesigned and built the website for BCIT's Technology Support Professional program to improve its usability and visual design. My design was chosen from a field of competing proposals and launched as the program's official website. The layout puts the most important sections (schedule, faculty, courses, IT certifications and resources) up front, and it adapts from desktop to tablet to phone.",
    tools: ["UX/UI design", "Responsive design", "HTML", "CSS", "JavaScript", "PHP"],
    image: "images/bcit-tsp.png",
    color: "#b5562a",
    links: { live: "", code: "" },
  },
  {
    title: "I ♥ Audrey",
    type: "Design & build",
    areas: ["ux", "dev"],
    year: "2013",
    role: "Responsive web design · Front-end development",
    summary: "A fully responsive photo blog celebrating Audrey Hepburn.",
    details:
      "A responsive photo blog concept about Audrey Hepburn, designed and coded from scratch. It uses a black-and-white masonry photo grid that reflows from a desktop sidebar layout to a compact mobile view.",
    tools: ["Responsive design", "HTML", "CSS", "JavaScript"],
    image: "images/i-love-audrey.png",
    color: "#333333",
    links: { live: "archive/audrey/", liveLabel: "View the site", code: "" },
  },
  {
    title: "Vintage Camera",
    type: "Design & build",
    areas: ["ux", "dev"],
    year: "2013",
    role: "Web design · Front-end development",
    summary: "A catalog website for a vintage camera shop, recently rebuilt to be fully responsive.",
    details:
      "A catalog website concept for a vintage camera shop, with a home page of new arrivals, a camera catalog, and service, about and contact pages. I originally built it for desktop, and in 2026 I updated the code to be fully responsive, so it now adapts to tablets and phones while keeping the original desktop design.",
    tools: ["Web design", "Responsive design", "HTML", "CSS"],
    image: "images/vintage-camera.jpg",
    color: "#e46a7a",
    links: { live: "archive/vintage-camera/", liveLabel: "View the site", code: "" },
  },
];
