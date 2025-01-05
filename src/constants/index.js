import {
  benefitIcon1,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  scalesetBanner,
  fiveStar,
  fourStar,
  threeStar,
  twoStar,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Testimonials",
    url: "#features",
  },
  {
    id: "2",
    title: "Our Strategy",
    url: "#strategy",
  },
  {
    id: "4",
    title: "Book A Call",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Case Study",
    url: "#roadmap",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [scalesetBanner, scalesetBanner, "" , scalesetBanner, scalesetBanner];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Done-For-You",
    description:
      "We manage your client acquisition - from custom campaigns to booking appointments - so you can focus on your business. Tailored for maximum results with minimal effort.",
    price: "0",
    features: [
      "Custom campaigns designed to acquire high-quality clients effortlessly",
      "Automated appointment booking system for streamlined client interactions",
      "Tailored strategies that maximize results with minimal time investment",
    ],
  },
  {
    id: "1",
    title: "Done-With-You",
    description:
      "Learn to master appointment setting with our training and guidance. Gain the skills to run effective campaigns independently - ideal for businesses on a budget or seeking in-house control.",
    price: "9.99",
    features: [
      "Comprehensive training on mastering appointment setting for long-term success",
      "Step-by-step guidance to run cost-effective campaigns without external help",
      "Tools and resources designed for businesses seeking in-house control and autonomy",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Company 1",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: fiveStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Company 1",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: threeStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Company 1",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: fourStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Company 1",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: fiveStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Company 1",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    stars: fiveStar,
    clientName: "Client 1",
    ClientPfp: benefitIcon1,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
