"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function ArrowButton({ label }: { label: string }) {
  return (
    <button
      aria-label={label}
      className="
        absolute top-4 right-4
        flex h-10 w-10 items-center justify-center
        rounded-lg
        bg-deloitte-green text-white
        transition-transform duration-300
        group-hover:scale-105
      "
    >
      <ArrowUpRight size={18} />
    </button>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  animClass?: string;
  animDelay?: number;
  animated?: boolean;
}

function ServiceCard({
  title,
  description,
  className = "",
  animClass = "fly-in-bottom",
  animDelay = 0,
  animated = false,
}: ServiceCardProps) {
  return (
    <div
      className={`
        group relative
        overflow-hidden
        rounded-xl
        border border-[#7EB48A]
        bg-[#F4F6F4]
        p-5
        flex flex-col justify-end
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-lg
        ${animated ? animClass : "opacity-0"}
        ${className}
      `}
      style={
        animated
          ? { animationDelay: `${animDelay}ms` }
          : undefined
      }
    >
      <ArrowButton label={`Learn more about ${title}`} />

      <h3 className="text-[1.9rem] font-bold leading-tight text-deloitte-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-deloitte-dark-gray">
        {description}
      </p>
    </div>
  );
}

export default function CoreServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="core-services">
      <div
        ref={sectionRef}
        className="mx-auto w-[90%] py-16 lg:w-4/5"
      >
        {/* Heading */}
        <div className="mb-12 ">
          <h2 className="text-4xl font-bold tracking-tight text-deloitte-black md:text-5xl">
            Core Services & Solutions
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-deloitte-dark-gray">
            Deloitte GPS delivers end-to-end services to government,
            supporting mission-critical initiatives across the public
            sector worldwide.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* LEFT */}
          <div className="grid gap-4">
            <ServiceCard
              title="Consulting"
              description="Strategic consulting services including human capital, strategy & operations, and technology solutions for federal and government clients."
              animated={animated}
              animClass="fly-in-tl"
              animDelay={0}
              className="min-h-[260px]"
            />

            <ServiceCard
              title="Compliance & Security"
              description="Cutting-edge technology implementation and digital transformation services for government operations."
              animated={animated}
              animClass="fly-in-bl"
              animDelay={150}
              className="min-h-[300px]"
            />
          </div>

          {/* CENTER */}
          <div className="order-first grid gap-4 lg:order-none">
            <div
              className={`
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-xl
                bg-deloitte-green
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-lg
                ${animated ? "fly-in-top" : "opacity-0"}
              `}
              style={
                animated
                  ? { animationDelay: "75ms" }
                  : undefined
              }
            >
              <Image
                src="/services-portrait.png"
                alt="Deloitte GPS professional"
                fill
                priority
                className="object-cover"
              />
            </div>

            <ServiceCard
              title="Technology Solutions"
              description="Strategic consulting services including human capital, strategy & operations, and technology solutions for federal and government clients."
              animated={animated}
              animClass="fly-in-bottom"
              animDelay={300}
              className="min-h-[220px]"
            />
          </div>

          {/* RIGHT */}
          <div className="grid gap-4">
            <ServiceCard
              title="Advisory"
              description="Expert advisory support across risk management, tax planning, and financial optimization for complex government contracting."
              animated={animated}
              animClass="fly-in-tr"
              animDelay={100}
              className="min-h-[260px]"
            />

            <ServiceCard
              title="Financial Management"
              description="Strategic consulting services including human capital, strategy & operations, and technology solutions for federal and government clients."
              animated={animated}
              animClass="fly-in-br"
              animDelay={250}
              className="min-h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
