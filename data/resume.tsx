import { Icons } from "../components/icons";
import { ResumeData } from "../types";

export const DATA: ResumeData = {
  name: "Yash",
  initials: "YS",
  url: "https://yash.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/San+Francisco,+CA",
  description:
    "Software Engineer. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, I pursued a double degree in computer science and business, interned at big tech companies in Silicon Valley, and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first ever in-person cohort of buildspace called buildspace sf1.",
  avatarUrl: "https://picsum.photos/seed/yash/400/400",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com",
        icon: Icons.Github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: Icons.Linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.Twitter,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.Mail,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "TUG Fantasy",
      href: "https://tugfantasy.com",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "https://picsum.photos/seed/tug/100/100",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      href: "https://shopify.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://picsum.photos/seed/shopify/100/100",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of production clusters. Wrote a script to automate the migration of over 100 production clusters to the new controller. Reduced deployment time by 90%.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "https://picsum.photos/seed/buildspace/100/100",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "https://picsum.photos/seed/waterloo/100/100",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: Icons.Globe,
          label: "Website"
        },
      ],
      image: "https://picsum.photos/seed/chatcollect/500/300",
      video: "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: Icons.Globe,
          label: "Website"
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: Icons.Github,
          label: "Source"
        },
      ],
      image: "https://picsum.photos/seed/magicui/500/300",
      video: "",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: Icons.Globe,
          label: "Website"
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: Icons.Github,
          label: "Source"
        },
      ],
      image: "https://picsum.photos/seed/llmreport/500/300",
      video: "",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: Icons.Globe,
          label: "Website"
        },
      ],
      image: "https://picsum.photos/seed/autochat/500/300",
      video: "",
    },
  ],
  hackathons: [
    // Filled based on context, truncated for brevity as detailed content wasn't fully visible but structure is needed
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "https://picsum.photos/seed/hack1/50/50",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "https://picsum.photos/seed/hack2/50/50",
      links: [],
    },
  ],
};
