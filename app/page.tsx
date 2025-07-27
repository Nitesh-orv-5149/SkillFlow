import CallToAction from "@/components/shared/CallToAction";
import FeaturesSection from "@/components/shared/FeaturesSection";
import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";

export default function homePage() {
  return (
    <>
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-4">
      <HeroSection/>
      <FeaturesSection/>
      <CallToAction />
    </main>
    </>
  );
}