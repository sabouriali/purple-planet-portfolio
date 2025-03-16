import About from "@/components/About";
import Hero from "@/components/Hero";
import KeyMetrics from "@/components/KeyMetrics";
import LogoAnimations from "@/components/LogoAnimations";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoAnimations />
      <About />
      <Portfolio />
      <Stack />
      <KeyMetrics />
      <Services />
    </>
  );
}
