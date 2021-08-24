import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedinIn,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "pizzni",
    link: "/menu",
  },
  {
    id: 2,
    title: "Muttoni",
    link: "/menu",
  },
  {
    id: 3,
    title: "Bruschetta",
    link: "/menu",
  },
  {
    id: 4,
    title: "Pasta",
    link: "/menu",
  },
  {
    id: 5,
    title: "Focaccia",
    link: "/menu",
  },
];

const quickLinks = [
  {
    id: 1,
    title: "About Us",
    link: "/about",
  },
  {
    id: 2,
    title: "Contact Us",
    link: "/contact",
  },
  {
    id: 3,
    title: "Menu",
    link: "/menu",
  },
  {
    id: 4,
    title: "News",
    link: "/news",
  },
  {
    id: 5,
    title: "Privacy Policy",
    link: "/",
  },
];

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "/",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    link: "/",
  },
  {
    id: 3,
    icon: <FaDribbble />,
    link: "/",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    link: "/",
  },
];

export { categories, quickLinks, socialLinks };
