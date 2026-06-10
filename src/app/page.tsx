import Hero from "@/components/Hero"
import CoreServices from "@/components/CoreServices"
import HowItWorks from "@/components/HowItWorks"

export default function Home() {
  return (
    <main className="bg-deloitte-white">
      <Hero />
      <CoreServices />
      <HowItWorks />
      {/* <section id="business-program" className="h-screen flex items-center justify-center">
        <p className="text-deloitte-mid-gray">Business Program section</p>
      </section>
      <section id="vendor-code-of-conduct" className="h-screen flex items-center justify-center bg-deloitte-off-white">
        <p className="text-deloitte-mid-gray">Vendor Code of Conduct section</p>
      </section>
      <section id="our-team" className="h-screen flex items-center justify-center bg-deloitte-off-white">
        <p className="text-deloitte-mid-gray">Our Team section</p>
      </section> */}
    </main>
  );
}
