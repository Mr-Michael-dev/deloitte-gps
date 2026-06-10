"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Register your firm",
    description:
      "Create your VendorConnect profile with your firm's capabilities, certifications, and past performance to get discovered by Deloitte GPS teams.",
  },
  {
    number: "2",
    title: "Get verified",
    description:
      "Complete our streamlined vetting process. Our team reviews your credentials, compliance status, and relevant experience within 5–7 business days.",
  },
  {
    number: "3",
    title: "Browse & apply",
    description:
      "Access active subcontracting opportunities across federal agencies. Filter by NAICS code, set-aside type, agency, or contract vehicle.",
  },
  {
    number: "4",
    title: "Win & deliver",
    description:
      "Collaborate directly with Deloitte GPS prime teams, leverage shared resources, and build a long-term partnership with a global leader.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="bg-deloitte-white my-16 md:my-24">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,#39AB35_0%,#27953B_50%,#1D7A34_100%)]"
      >
        <div className="mx-auto w-[90%] lg:w-4/5 pb-20 pt-16 md:pb-28 md:pt-24">

          {/* Heading */}
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              How It Works
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80 md:text-[0.9375rem] mx-auto md:mx-0">
              VendorConnect is designed to make federal subcontracting straightforward, even if it&apos;s your first time working with a prime contractor of Deloitte&apos;s scale.
            </p>
          </div>

          {/* Steps — no cards, just columns */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`text-center md:text-left transition-all duration-500 ease-out ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
              >
                <p className="mb-4 text-[4.5rem] font-bold leading-none text-white">
                  {step.number}
                </p>
                <h3 className="mb-3 text-xl font-bold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-white/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
