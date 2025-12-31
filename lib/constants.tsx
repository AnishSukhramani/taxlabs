import {
  IconBrandGithub,
  IconBrandX,
  IconTerminal2,
} from "@tabler/icons-react";

export const DOCK_LINKS = [
  {
    title: "Home",
    icon: (
      <img 
        src="/Untitled design (1).png" 
        alt="Logo" 
        className="h-[140%] w-[140%] object-cover"
        style={{ borderRadius: '20%' }}
      />
    ),
    href: "/home",
  },
  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

