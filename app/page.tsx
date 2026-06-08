import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import WorkSection from "@/components/work/WorkSection";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
