import { Footer } from "../components/Footer";
import { NavBar } from "../components/Header";
import { Hero } from "../components/Hero";

export const links = [
  {
    link: "/about",
    label: "Features",
  },
  {
    link: "#1",
    label: "Learn",
    links: [
      {
        link: "/docs",
        label: "Documentation",
      },
      {
        link: "/resources",
        label: "Resources",
      },
      {
        link: "/community",
        label: "Community",
      },
      {
        link: "/blog",
        label: "Blog",
      },
    ],
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
  {
    link: "#2",
    label: "Support",
    links: [
      {
        link: "/faq",
        label: "FAQ",
      },
      {
        link: "/demo",
        label: "Book a demo",
      },
      {
        link: "/forums",
        label: "Forums",
      },
    ],
  },
];

const footerLinks = [
  {
    link: "#",
    label: "Contact",
  },
  {
    link: "#",
    label: "Privacy",
  },
  {
    link: "#",
    label: "Blog",
  },
  {
    link: "#",
    label: "Careers",
  },
];

export default function Home() {
  return (
    <div>
      <main>
        <NavBar links={links} />
        <Hero />
      </main>
      <Footer links={footerLinks} />
    </div>
  );
}
