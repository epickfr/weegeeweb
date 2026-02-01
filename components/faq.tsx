"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes Weegee different from other platforms?",
    answer:
      "Weegee combines enterprise-grade infrastructure with developer-friendly pricing. We focus on simplicity without sacrificing power, giving you the tools you need without the complexity you don't.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer transparent, usage-based pricing with no hidden fees. Start free and only pay for what you use. Our pricing scales with your success, so you're never overpaying for resources you don't need.",
  },
  {
    question: "Is there a free tier available?",
    answer:
      "Yes! Our generous free tier includes everything you need to get started. Build, test, and deploy your projects without any cost. Upgrade only when you're ready to scale.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Security is our top priority. We use bank-level encryption, SOC 2 compliance, and regular security audits. Your data is encrypted at rest and in transit, with optional end-to-end encryption for sensitive workloads.",
  },
  {
    question: "Can I migrate from another platform?",
    answer:
      "Absolutely. We provide comprehensive migration tools and documentation. Our support team is available 24/7 to help ensure a smooth transition. Most migrations are completed in under an hour.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include access to our community forums and documentation. Paid plans include email support with guaranteed response times. Enterprise customers get dedicated support engineers and custom SLAs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="relative py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-emerald-500/10 to-transparent blur-[120px]" />
        <div className="animate-float-delayed absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-lime-500/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="animate-gradient bg-gradient-to-r from-accent via-emerald-400 to-lime-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Everything you need to know about Weegee. Can&apos;t find what you&apos;re looking for?
            Reach out to our support team.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-2xl border border-border/20 bg-card/20 backdrop-blur-sm transition-all duration-700 ease-out ${
                openIndex === index ? "border-accent/30 bg-card/40" : "hover:border-border/40 hover:bg-card/30"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-all duration-300"
              >
                <span
                  className={`text-lg font-medium transition-colors duration-300 ${
                    openIndex === index ? "text-accent" : "text-foreground group-hover:text-foreground/90"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border/30 bg-card/50 transition-all duration-500 ${
                    openIndex === index
                      ? "rotate-180 border-accent/50 bg-accent/20"
                      : "group-hover:border-border/50 group-hover:bg-card/80"
                  }`}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-colors duration-300 ${
                      openIndex === index ? "text-accent" : "text-muted-foreground"
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="#"
              className="relative inline-block text-accent transition-all duration-300 hover:text-emerald-300"
            >
              Contact our team
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-accent to-emerald-400 transition-all duration-300 hover:w-full" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
