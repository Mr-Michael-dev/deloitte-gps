'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items?: FaqItem[];
  title?: string;
  subtitle?: string;
  allowMultiple?: boolean;
  defaultOpenIndex?: number | null;
};

const DEFAULT_FAQS: FaqItem[] = [
  {
    question: 'Do I need an active SAM.gov registration to apply?',
    answer:
      'Yes — an active SAM.gov (System for Award Management) registration is required before you can submit to any opportunity on VendorConnect. You can register at sam.gov — it’s free and typically takes 3–5 business days to activate. Our platform tracks your registration expiry and alerts you 60 and 30 days in advance.',
  },
  {
    question: 'Is VendorConnect only for firms with existing federal experience?',
    answer:
      'No. First-time federal vendors are welcome. We surface opportunities suited to your size and past-performance level, and flag set-asides you qualify for so you’re not competing against incumbents on day one.',
  },
  {
    question: 'How long does vendor verification take?',
    answer:
      'Most verifications complete within 1–2 business days once your SAM.gov record and business documents are submitted. Incomplete records are the most common cause of delay, so we validate your details before you submit.',
  },
  {
    question: 'Can small businesses apply?',
    answer:
      'Absolutely. A large share of opportunities are reserved as small-business set-asides, including 8(a), HUBZone, WOSB, and SDVOSB categories. We match your certifications to eligible opportunities automatically.',
  },
];

export default function FaqSection({
  items = DEFAULT_FAQS,
  title = 'Frequently\nAsked Questions',
  subtitle = 'Common questions people asked for clarification.',
  allowMultiple = false,
  defaultOpenIndex = 0,
}: FaqSectionProps) {
  const [open, setOpen] = useState<Set<number>>(
    () => new Set(defaultOpenIndex === null ? [] : [defaultOpenIndex]),
  );
  const baseId = useId();

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="bg-deloitte-white py-16 sm:py-20">
      <div className="mx-auto w-4/5 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.7fr] md:gap-16">

        {/* Left column — title block */}
        <div className="pt-2">
          <h2 className="whitespace-pre-line text-4xl font-bold tracking-tight text-deloitte-black md:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-deloitte-dark-gray">{subtitle}</p>
        </div>

        {/* Right column — accordion */}
        <div className="flex flex-col">
          {items.map((item, index) => {
            const isOpen = open.has(index);
            const headingId = `${baseId}-faq-${index}-trigger`;
            const panelId = `${baseId}-faq-${index}-panel`;

            return (
              <div
                key={index}
                className={[
                  'transition-colors duration-200',
                  isOpen
                    ? 'rounded-2xl bg-deloitte-green/10 px-5 py-4 mb-2'
                    : 'border-b border-deloitte-green px-5 py-4',
                ].join(' ')}
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-sm font-semibold text-deloitte-black sm:text-base">
                      {item.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-deloitte-green/15">
                      <ChevronDown
                        aria-hidden="true"
                        className={[
                          'h-4 w-4 text-deloitte-dark-gray transition-transform duration-300 motion-reduce:transition-none',
                          isOpen ? 'rotate-180' : '',
                        ].join(' ')}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 text-sm leading-relaxed text-deloitte-dark-gray">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
