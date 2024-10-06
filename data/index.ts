import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm dedicated to bringing my clients' visions to life and improving their world",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Time zone contact is flexible",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Technology lover with a strong passion for software development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently studying Tailwind CSS and Next.js.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Are you interested in collaborating on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Naruto illustrated book",
    des: "Naruto API を利用してナルト図鑑を作成しました",
    img: "/naruto.png",
    iconLists: ["/re.svg"],
    link: "https://naruto-dex.netlify.app/",
  },
  {
    id: 2,
    title: "Spotify Music App",
    des: "Spotify APIとtailwindcssを使った音楽試曲アプリです",
    img: "/musicapp.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://spotifymusic-app.netlify.app",
  },
  {
    id: 3,
    title: "SNS app ",
    des: "SupabaseとReactを使って掲示板アプリを開発しました",
    img: "/sns.png",
    iconLists: ["/re.svg", "/tail.svg","/supabase.png"],
    link: "https://sns-by-spabase-bbbyk105.netlify.app",
  },
  {
    id: 4,
    title: "AI Code Reviewer",
    des: "OpenAIのAPIを利用してAI Code Reviewerを作成しました",
    img: "/ai.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://ai-code-reviewerjj.netlify.app/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url:"https://github.com/bbbyk105",
  },
  {
    id: 2,
    img: "/insta.png",
    url:"https://www.instagram.com/byakko_bbb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/%E7%99%BD%E8%99%8E-%E8%BF%91%E8%97%A4-983273319"
  },
];