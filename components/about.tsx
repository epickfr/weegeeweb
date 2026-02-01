"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Target, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower developers worldwide with tools that make building exceptional software effortless and enjoyable.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A passionate group of engineers, designers, and dreamers united by the belief that great tools lead to great products.",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description:
      "A world where every developer has access to enterprise-grade infrastructure, regardless of team size or budget.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Transparency, simplicity, and developer happiness drive every decision we make. Your success is our success.",
  },
];

export function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            About{" "}
            <span className="animate-gradient bg-gradient-to-r from-accent via-emerald-400 to-lime-300 bg-clip-text text-transparent">
              Weegee
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We started Weegee because we believed developers deserved better. Better tools,
            better pricing, better support. What began as a small side project has grown
            into a platform trusted by thousands of developers worldwide.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative overflow-hidden rounded-3xl border border-border/20 bg-card/20 p-10 backdrop-blur-sm transition-all duration-700 ease-out hover:border-accent/30 hover:bg-card/40 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 via-emerald-500/0 to-lime-500/0 opacity-0 transition-all duration-700 group-hover:from-accent/10 group-hover:via-emerald-500/5 group-hover:to-lime-500/10 group-hover:opacity-100" />
              
              {/* Icon glow */}
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-emerald-500/20 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-emerald-500/10 transition-all duration-500 group-hover:scale-110 group-hover:from-accent/30 group-hover:to-emerald-500/20">
                  <value.icon className="h-8 w-8 text-accent transition-all duration-500 group-hover:text-emerald-300" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-foreground transition-colors duration-500 group-hover:text-white">
                  {value.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-muted-foreground/90">
                  {value.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-accent via-emerald-400 to-lime-400 transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className={`mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          {[
            { value: "50K+", label: "Developers" },
            { value: "99.99%", label: "Uptime" },
            { value: "24/7", label: "Support" },
            { value: "150+", label: "Countries" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-border/20 bg-card/10 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-card/30"
            >
              <div className="text-3xl font-bold text-foreground transition-all duration-500 group-hover:scale-110 group-hover:text-accent md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
