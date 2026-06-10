import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className="bg-deloitte-white">
      <Hero />
      <section id="business-program" className="h-screen flex items-center justify-center">
        <p className="text-deloitte-mid-gray">Business Program section</p>
      </section>
      <section id="core-services" className="h-screen flex items-center justify-center">
        <p className="text-deloitte-mid-gray">Core Services section</p>
      </section>
      <section id="vendor-code-of-conduct" className="h-screen flex items-center justify-center bg-deloitte-off-white">
        <p className="text-deloitte-mid-gray">Vendor Code of Conduct section</p>
      </section>
      <section id="vendor-registration" className="h-screen flex items-center justify-center">
        <p className="text-deloitte-mid-gray">Vendor Registration section</p>
      </section>
      <section id="our-team" className="h-screen flex items-center justify-center bg-deloitte-off-white">
        <p className="text-deloitte-mid-gray">Our Team section</p>
      </section>
    </main>
  );
}
