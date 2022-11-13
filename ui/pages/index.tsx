import { footerLinks, headerLinks } from "../api/constants";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar links={headerLinks} />
        <Hero />
      </main>
      <Footer links={footerLinks} />
    </div>
  );
}
