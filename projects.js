/* =====================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR PORTFOLIO.
   Keep the quotes "" and commas , exactly as they are.
   Anything marked CHECK is my best guess. Please confirm or fix it.
   ===================================================================== */

const SITE = {
  name: "Sheridan K. Smith",
  // Each line becomes one paragraph. Links: [link text](https://url)
  bio: [
    "I'm a journalist, photo editor and international affairs researcher in New York City. My work sits where geopolitics, technology, media and ethics meet, with a focus on AI governance, ethical photography in Brazilian favelas, and U.S. foreign policy.",
    "I'm a Master of International Affairs candidate in Technology Policy and Innovation at Columbia SIPA, and Opinion Editor of The Morningside Post. I'm also a Photo Editor at Reach Plc and a former columnist for the National Press Photographers Association. I began my career assisting photographers on assignment for The New York Times, The Wall Street Journal and National Geographic, and I write about what that taught me in [Writing With Light](https://sheridansmith.substack.com/).",
    "More of my work: [Washington Square News archive](https://nyunews.com/staff_name/sheridan-smith/), [The Borgen Project archive](https://borgenproject.org/?s=sheridan+smith) and my [photography portfolio](https://www.sheridansmithphotography.com/)."
  ],
  links: [
    { label: "Writing With Light", url: "https://sheridansmith.substack.com/" },
    { label: "Photography", url: "https://www.sheridansmithphotography.com/" },
    { label: "Resume", url: "assets/resume.pdf" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sheridan-smith-70a715221/" },
    { label: "Instagram", url: "https://www.instagram.com/sheridan.smithh/" }
    // To add email, add: { label: "Email", url: "mailto:you@example.com" }
  ],
  footer: "© 2026 Sheridan K. Smith"
};

const CATEGORIES = [
  { key: "visual",   label: "visual investigations", blurb: "Evidence-driven projects built from video, images, documents and data." },
  { key: "photo",    label: "photographed articles", blurb: "Stories told through my photography." },
  { key: "written",  label: "written articles",      blurb: "Reporting and writing where I was the author." },
  { key: "assisted", label: "assisted articles",     blurb: "Stories where I contributed research, reporting or production." }
];

/* One block per piece of work. Copy a block, paste it below, and edit.

   category:    "visual", "photo", "written" or "assisted"
   title, outlet, date ("" hides it)
   url:         link to the story ("" is fine for now; the title just won't be clickable)
   image:       e.g. "assets/joga-favela.jpg" ("" shows a plain placeholder)
   imageAlt:    one sentence describing the picture, for screen readers
   description: 1–3 sentences
   role:        what YOU did
   tools:       optional, "" to hide
   github:      optional link to code or data, "" to hide

   The "visual investigations" filter stays hidden until you add a story with
   category "visual". An example is commented out at the bottom.
*/
const PROJECTS = [
  /* ---------- written ---------- */
  {
    category: "written",
    title: "Writing With Light",
    outlet: "Substack",
    date: "",
    url: "https://sheridansmith.substack.com/",
    image: "",
    imageAlt: "",
    description: "“Through the Eyes of a Photo Assistant”: what I learned assisting photographers on assignment for The New York Times, The Wall Street Journal and National Geographic, and how I bring it to my own work.",
    role: "Author",
    tools: "",
    github: ""
  },
  {
    category: "written",
    title: "Sheridan Shares: column sample",
    outlet: "National Press Photographers Association",
    date: "2025–2026",
    url: "https://cdn.mc-weblink.sg-mktg.com/weblink/MTczNDU2MTI2MHxLay1saWJjZkNhdV9adlFlRmJJdlV4elBrQ1dQd3JfSnpwd25sQW4wdXJfbXJRYnZ2Y19CRGUzLWRqWGtoYi1wVGU4ODRvb184dklZRFhHNVVJMkVxM19RY3lqMnVPaHYxLUZSbUl6Q0JqMTRXZnVnS2hUc3F6VS1wVnBvbjdld3JNR3JSZGtzR1gtcGhlYWc1QnRobHdIS19SUENxZnJfMUVGMHFJdFExZ29pUXlTRXdEZUhiV2h5a0NhLVdmbjVZSmRzQnZCZmhyVDlHMFdCUjdFSEloY3ZOMVlCRFV1dDc5Ym44WGF4YVl5SXRQZ3BESlBmbFJoMld0cUpNeVlRYWtYOTc5OGFlM3ExclJlOVppMFNnVWwzOXMxaWZJV2pGdkdsM2FTNHZZWHFFU3hCSl9CUzVDVDFsUHN5ZXJySnFhV29lZEF6Tk5scnxDb8ik6eCLkbqXG1tN-MCuKIUDnllO3HTNctNXyHJDkA==",
    image: "",
    imageAlt: "",
    description: "A weekly segment in NPPA's Ten Things column on industry ethics, policy and trends in photojournalism.",
    role: "Columnist; created and designed the segment",
    tools: "",
    github: ""
  },
  {
    category: "written",
    title: "The Role of AI in Reducing Poverty",  // CHECK: the title may be longer
    outlet: "The Borgen Project",
    date: "June 2024",
    url: "https://borgenproject.org/?p=525575",
    image: "",
    imageAlt: "",
    description: "How AI is being used to improve health care access in Brazil, education in Kenya and disaster response in Bangladesh.",
    role: "Business and Politics Reporter",
    tools: "",
    github: ""
  },

  /* ---------- photographed ---------- */
  {
    category: "photo",
    title: "Joga Favela: Soccer in Vidigal, Brazil",
    outlet: "Sheridan K. Smith Photography",
    date: "",
    url: "https://www.sheridansmithphotography.com/joga-favela-soccer-in-vidigal-brazil",
    image: "",
    imageAlt: "",
    description: "A photo story on soccer in Vidigal, a favela in Rio de Janeiro.",  // CHECK: add a sentence on your approach to ethical photography
    role: "Photographer",
    tools: "",
    github: ""
  },
  {
    category: "photo",
    title: "A Venezuelan in Lima, Perú",
    outlet: "Sheridan K. Smith Photography",
    date: "",
    url: "https://www.sheridansmithphotography.com/jes%C3%BAs-celis-on-the-edge",
    image: "",
    imageAlt: "",
    description: "A documentary portrait of Jesús Celis, a Venezuelan living in Lima.",  // CHECK
    role: "Photographer",
    tools: "",
    github: ""
  },
  {
    category: "photo",
    title: "Morocco: “Politics, not people”",
    outlet: "Sheridan K. Smith Photography",
    date: "",
    url: "https://www.sheridansmithphotography.com/morocco-politics-not-people",
    image: "",
    imageAlt: "",
    description: "",  // CHECK: add one or two sentences
    role: "Photographer",
    tools: "",
    github: ""
  },
  {
    category: "photo",
    title: "Zohran Mamdani: NY is Not For Sale",
    outlet: "Sheridan K. Smith Photography",
    date: "",
    url: "https://www.sheridansmithphotography.com/zohran-mamdani-ny-is-not-for-sale",
    image: "",
    imageAlt: "",
    description: "",  // CHECK
    role: "Photographer",
    tools: "",
    github: ""
  },
  {
    category: "photo",
    title: "NYU in the psychedelic renaissance",
    outlet: "Washington Square News",
    date: "April 2023",
    url: "https://nyunews.com/features/2023/04/09/nyu-psychedelic-renaissance/",
    image: "",
    imageAlt: "A blue psilocybin capsule inside a glass jar on a windowsill",
    description: "A WSN feature on NYU and the resurgence of interest in psychedelics.",  // CHECK: your resume lists this as reporting, but the WSN byline says Staff Photographer. Tell me which role to show.
    role: "Staff photographer",
    tools: "",
    github: ""
  },
  {
    category: "photo",
    title: "Brooklyn Baby",
    outlet: "Washington Square News",
    date: "December 2022",
    url: "https://nyunews.com/2022/12/14/brooklyn-baby/",
    image: "",
    imageAlt: "A couple in a kitchen holding a baby",
    description: "A photographer follows a millennial couple as they navigate life with a baby in 2022.",
    role: "Staff photographer",
    tools: "",
    github: ""
  },
  {
    category: "photo",
    title: "The people of Washington Square Park",
    outlet: "Washington Square News",
    date: "October 2022",
    url: "https://nyunews.com/2022/10/06/the-people-of-washington-square-park/",
    image: "",
    imageAlt: "A man doing bicycle tricks as two girls pose for a photo",
    description: "A photographer captures people in and around the center of NYU's campus.",
    role: "Staff photographer",
    tools: "",
    github: ""
  },
  {
    category: "photo",
    title: "Love in New York City",
    outlet: "Washington Square News, Under the Arch",
    date: "February 2023",
    url: "https://nyunews.com/under-the-arch/2023/02/26/love-in-nyc/",
    image: "",
    imageAlt: "",
    description: "",  // CHECK
    role: "Staff photographer",
    tools: "",
    github: ""
  },
  {
    category: "photo",
    title: "Bringing back Broadway",
    outlet: "Washington Square News",
    date: "March 2021",
    url: "https://nyunews.com/2021/03/24/bringing-back-broadway/",
    image: "",
    imageAlt: "The Ambassador Theatre on West 49th Street",
    description: "Photos of Broadway theaters as New York's entertainment venues prepared to reopen at limited capacity in 2021.",
    role: "Staff photographer",
    tools: "",
    github: ""
  },

  /* ---------- assisted ---------- */
  {
    category: "assisted",
    title: "Photojournalism assignments",  // CHECK: better to list specific stories, one block each
    outlet: "The New York Times, The Wall Street Journal, National Geographic and others",
    date: "2022–present",
    url: "",
    image: "",
    imageAlt: "",
    description: "Supported photojournalists on assignments for National Geographic, New York Magazine, El País, The Wall Street Journal, The New Yorker and The New York Times.",
    role: "Research, production, logistics and editorial coordination",
    tools: "",
    github: ""
  }

  /* EXAMPLE visual investigation. Remove the slashes around it to use it.
  ,{
    category: "visual",
    title: "Your headline",
    outlet: "Outlet",
    date: "Month 2026",
    url: "https://example.com",
    image: "assets/your-image.jpg",
    imageAlt: "Describe the image",
    description: "What the investigation found and how.",
    role: "What you did",
    tools: "",
    github: ""
  }
  */
];
