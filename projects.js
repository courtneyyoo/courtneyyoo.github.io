// ============================================================
//  YOUR PROJECTS LIVE HERE
//  To add a project: copy one { ... } block, paste it below the
//  others, and change the text. Save, then refresh the page.
//
//  category: "professional", "personal", or "school"
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
    title: "Example client website",
    category: "professional",
    year: "2025",
    role: "Freelance designer & developer",
    summary: "Replace this with a real client project: who it was for and what you made.",
    details:
      "Describe the problem, your process (research, wireframes, design, build), and the result. Numbers help, like faster load times or more sign-ups.",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    image: "",
    color: "#7aa6c2",
    links: { live: "", code: "" },
  },
  {
    title: "Example school project",
    category: "school",
    year: "2025",
    role: "Course: [course name]",
    summary: "Replace this with a class assignment you're proud of.",
    details:
      "Say what the assignment asked for, what you chose to do, and what you learned. Teachers' briefs make great 'problem' statements.",
    tools: ["HTML", "CSS"],
    image: "",
    color: "#9bbf85",
    links: { live: "", code: "" },
  },
  {
    title: "Example UI redesign",
    category: "school",
    year: "2024",
    role: "UX / UI design",
    summary: "Replace this with a redesign or case study from a design class.",
    details: "Before-and-after screenshots work really well here.",
    tools: ["Figma"],
    image: "",
    color: "#c79ad6",
    links: { live: "", code: "" },
  },
];
