import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-deloitte-white overflow-hidden min-h-screen flex items-center">
      <div className="w-[90%] md:w-4/5 mx-auto
                      flex flex-col md:flex-row md:items-center
                      gap-12 md:gap-14 lg:gap-20
                      py-14 md:py-20 lg:py-24
                      md:min-h-170">

        {/* Left: copy */}
        <div className="flex flex-col flex-1 min-w-0">

          {/* Badge */}
          <span className="inline-flex items-center gap-2.5 self-start border border-deloitte-green/50 bg-[#F9F9F9] rounded-full px-5 py-2.5 mb-8 md:mb-10">
            <span className="w-3 h-3 rounded-full bg-deloitte-green shrink-0" />
            <span className="text-sm text-[#575757] font-medium whitespace-nowrap">
              Welcome to GPS Vendor Connect
            </span>
          </span>

          {/* Heading — fluid scale across all breakpoints */}
          <h1 className="text-[2.75rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem]
                         font-bold text-deloitte-black leading-[1.05] tracking-tight
                         mb-5 md:mb-7 lg:mb-8">
            Collaborate with <span className="text-[#008818]">Deloitte,</span><br />
            Transform Your Partnership.
          </h1>

          {/* Body */}
          <p className="w-[90%] md:w-[65%] text-base md:text-[1.0625rem] text-deloitte-dark-gray leading-relaxed mb-8 md:mb-10">
            Connect with Deloitte Government &amp; Public Services for exclusive partnership
            opportunities, streamlined vendor management, and collaborative tools designed
            for mutual success.
          </p>

          {/* CTA */}
          <button
            className="inline-flex items-center justify-center gap-3 bg-deloitte-green text-white
                       text-base md:text-lg font-semibold
                       w-1/2 py-4 md:py-5 rounded-[1.25rem]
                       hover:bg-deloitte-green-dark active:scale-95 transition-all duration-200"
          >
            Start Here
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: image + arrow — both fully inside this container */}
        <div className="relative w-full sm:w-4/5 sm:mx-auto md:mx-0 md:w-[42%] md:max-w-130 shrink-0">

          {/* Responsive SVG clip-path: notch at bottom-left with rounded corners.
              objectBoundingBox coords (0–1) scale with the container automatically.
              n=0.27 notch fraction, r=0.05 corner radius. */}
          <svg width="0" height="0" className="absolute" aria-hidden>
            <defs>
              <clipPath id="hero-notch" clipPathUnits="objectBoundingBox">
                <path d="M 0 0 L 1 0 L 1 1 L 0.33 1 Q 0.28 1 0.28 0.95 L 0.28 0.77 Q 0.28 0.72 0.23 0.72 L 0.05 0.72 Q 0 0.72 0 0.67 L 0 0 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Outer div: applies the notch clip + entrance animation */}
          <div className="hero-image-notch hero-image-enter">
            {/* Inner div: clips the other three corners + handles hover zoom */}
            <div className="overflow-hidden rounded-4xl
                            transition-transform duration-500 ease-out hover:scale-[1.03]">
              <Image
                src="/hero.png"
                alt="GPS Vendor Connect dashboard"
                width={520}
                height={520}
                priority
                className="w-full h-auto select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Arrow: flush with image bottom-left, percentage width stays in sync with notch */}
          <div className="group absolute bottom-0 left-0
                          w-[27%] aspect-square rounded-2xl
                          bg-white border-2 border-deloitte-green text-deloitte-green
                          flex items-center justify-center z-10 cursor-pointer
                          hover:bg-deloitte-green hover:scale-105
                          transition-all duration-300 ease-out
                          hero-arrow-enter">
            <ArrowUpRight className="w-8 h-8 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>

      </div>
    </section>
  )
}

function ArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8L8 2M8 8V2H2" />
    </svg>
  )
}