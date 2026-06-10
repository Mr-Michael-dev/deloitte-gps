import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const navColumns = [
  [
    { label: 'About', href: '#' },
    { label: 'Core Services', href: '#core-services' },
  ],
  [
    { label: 'Vendor Code of Conduct', href: '#' },
    { label: 'Vendor Registration', href: '#' },
    { label: 'Get Support', href: '#' },
  ],
  [
    { label: 'Team', href: '#' },
    { label: 'Business Program', href: '#' },
  ],
  [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-2z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: LinkedInIcon, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-deloitte-white border-t border-deloitte-light-gray">
      <div className="mx-auto w-[90%] py-12 lg:w-4/5">

        {/* CTA */}
        <div className="flex flex-col gap-8 pb-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-deloitte-black md:text-4xl">
              Ready to Partner<br />with Deloitte?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-deloitte-dark-gray">
              Whether you&apos;re a prospective vendor exploring partnership opportunities or an
              existing partner managing your services, we&apos;ve simplified the process.
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-deloitte-green px-8 py-3.5 text-sm font-medium text-deloitte-white transition-colors duration-200 hover:bg-deloitte-green-dark"
          >
            Start Here
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <hr className="border-deloitte-light-gray" />

        {/* Nav Links */}
        <div className="grid grid-cols-2 gap-8 py-10 text-sm text-deloitte-dark-gray md:grid-cols-4">
          {navColumns.map((col, i) => (
            <div key={i} className="flex flex-col gap-3.5">
              {col.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-deloitte-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <hr className="border-deloitte-light-gray mb-8" />

        {/* Logo & Socials */}
        <div className="flex items-center justify-between">
          <Image
            src="/Logo_of_Deloitte.svg"
            alt="Deloitte Logo"
            width={140}
            height={27}
            className="h-7 w-auto object-contain"
            priority
          />

          <div className="flex items-center gap-3">
            {socials.map(({ Icon, label }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-deloitte-green text-deloitte-white transition-colors duration-200 hover:bg-deloitte-green-dark"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
