// ============================================================
//  YOUR PROJECTS LIVE HERE
//  To add a project: copy one { ... } block, paste it below the
//  others, and change the text. Save, then refresh the page.
//
//  category: "professional", "personal", or "school"
//  year:     optional. Leave as "" to hide it.
//  image:    put the picture in the images/ folder and write its
//            name here, e.g. "images/my-project.png".
//            Leave it as "" to show a colored placeholder.
//  screens:  (optional) phone screenshots, shown side by side
//            instead of a single image, e.g. for a mobile app.
//  links:    leave a link as "" to hide that button.
// ============================================================

const PROJECTS = [
  {
    title: "4PM Planner",
    category: "personal",
    year: "2026",
    role: "Design & development",
    summary: "A family planner app that tracks kids' activities, who's driving, and what to bring.",
    details:
      "I designed and built a mobile app for busy families. Parents see each child's activities at a glance, color-coded by kid, with drop-off and pickup assignments and a \"Don't forget\" list for every event. It supports weekly recurring events, a month and week calendar, and reminders before each event and pickup. The trickiest part was making reminders fire at exactly the right time, including across daylight-saving changes and Android's exact-alarm permission.",
    tools: ["React Native", "Expo", "TypeScript", "Supabase"],
    image: "",
    screens: ["images/4pm-today.jpg", "images/4pm-calendar.png", "images/4pm-event.png"],
    color: "#f2a65a",
    links: { live: "4pm-demo/", liveLabel: "Try the demo", code: "" },
    note: "The demo runs in your browser. Tap \"Explore with a sample family\" to see it with example data. Anything you add stays only on your device.",
  },
  {
    title: "Windback",
    category: "school",
    year: "2026",
    role: "GDES 2150 · UX research & app design",
    summary: "A mobile app for buying disposable cameras and mailing them back for film development.",
    details:
      "Windback is a mobile app that makes film photography easy from start to finish. Users compare disposable cameras by photo style, buy one, mail it back with prepaid shipping, and get their photos digitally and as prints. I started with research: a questionnaire and two interviews showed that everyone loved the grainy vintage look, but 83% said mailing or dropping off film was the biggest barrier, and all of them wanted one app to handle it all. From there I built a persona, a user scenario and a journey map, mapped the user flow, then designed the screens and a clickable prototype in Figma. After moving from wireframes to the final design, I moved the Add to Cart button above the photo-style previews so the main action is visible without scrolling.",
    tools: ["Figma", "User research", "Personas", "Journey mapping", "User flows", "Prototyping"],
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
    category: "school",
    year: "2026",
    role: "MDIA 2330 · Interactive website prototype",
    summary: "A custom tote bag shop where shoppers pick a bag colour and print and preview it live.",
    details:
      "Canvas Club is a desktop e-commerce website where shoppers design their own tote bag. I designed and prototyped it in Figma, focusing on reusable components with variants: a navbar that shows the active page, a hero carousel on the Home page, colour and print pickers (four variants each) that update the bag preview in real time, a Gallery page with working category filters, and a cart overlay that opens from the cart icon and buttons. I started from hand-drawn wireframes and added a footer to each page in the final design so the pages feel complete.",
    tools: ["Figma", "Components & variants", "Interactive prototyping", "Wireframing"],
    image: "images/canvasclub-hero.jpg",
    fit: "cover",
    color: "#e98c78",
    links: { live: "", code: "" },
    gallery: [
      { src: "images/canvasclub-hero2.jpg", caption: "Home page hero carousel, slide 2" },
      { src: "images/canvasclub-hero3.jpg", caption: "Home page hero carousel, slide 3" },
      { src: "images/canvasclub-wireframe.jpg", caption: "Hand-drawn low-fi wireframes: Home, Product, Gallery and Cart overlay" },
    ],
    note: "Product and gallery images were generated with AI for this class project.",
  },
  {
    title: "West Coast Rail Tours",
    category: "professional",
    year: "",
    role: "WordPress design & development",
    summary: "A custom WordPress theme for a travel agency specializing in rail travel.",
    details:
      "I designed and built a custom WordPress theme for West Coast Rail Tours, a travel agency that specializes in rail travel. The site features tours by region (Canada, USA and international) and a trip planner that lets visitors request a quote for round-trip, one-way or multi-city journeys.",
    tools: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    image: "images/west-coast-rail-tours.jpg",
    color: "#6b8f5e",
    links: { live: "", code: "" },
  },
  {
    title: "BCIT Technology Support Professional Program",
    category: "school",
    year: "",
    role: "Responsive website redesign · Selected & launched",
    summary: "A class redesign of the BCIT TSP program website, chosen from many entries and launched as the official site.",
    details:
      "As a class project, I redesigned the BCIT Technology Support Professional program website to improve its usability and visual design. My design was selected from many competing student entries and launched as the program's official website. The layout puts the most important sections (schedule, faculty, courses, IT certifications and resources) up front, and it adapts from desktop to tablet to phone.",
    tools: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "images/bcit-tsp.png",
    color: "#b5562a",
    links: { live: "", code: "" },
  },
  {
    title: "I ♥ Audrey",
    category: "personal",
    year: "2013",
    role: "Responsive blog design",
    summary: "A fully responsive photo blog design celebrating Audrey Hepburn.",
    details:
      "A design proposal for a responsive photo blog about Audrey Hepburn. It uses a black-and-white masonry photo grid that reflows from a desktop sidebar layout to a compact mobile view.",
    tools: ["HTML", "CSS", "JavaScript"],
    image: "images/i-love-audrey.png",
    color: "#333333",
    links: { live: "archive/audrey/", liveLabel: "View the site", code: "" },
  },
  {
    title: "Vintage Camera",
    category: "school",
    year: "2013",
    role: "BCIT project · Shop catalog website",
    summary: "A simple catalog website for a vintage camera shop.",
    details:
      "A catalog website for a vintage camera shop, created as a BCIT project. It has a home page with new arrivals, a camera catalog, and service, about and contact pages. I originally built it for desktop, and in 2026 I updated it to be fully responsive, so it now adapts to tablets and phones while keeping the original desktop design.",
    tools: ["HTML", "CSS", "Responsive design"],
    image: "images/vintage-camera.jpg",
    color: "#e46a7a",
    links: { live: "archive/vintage-camera/", liveLabel: "View the site", code: "" },
  },
];
