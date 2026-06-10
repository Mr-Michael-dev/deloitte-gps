import Hero from "@/components/Hero"
import CoreServices from "@/components/CoreServices"
import HowItWorks from "@/components/HowItWorks"
import FaqSection from "@/components/FaqSection"

export default function Home() {
  return (
    <main className="bg-deloitte-white">
      <Hero />
      <CoreServices />
      <HowItWorks />
      <FaqSection />
    </main>
  );
}
