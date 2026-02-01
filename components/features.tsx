"use client";

import { Zap, Globe, DollarSign, Shield, Cpu, Cloud } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Execute requests in under 50ms. Our global edge network ensures blazing fast performance worldwide.",
    gradient: "from-cyan-400 to-cyan-600",
    glow: "cyan",
  },
  {
    icon: Globe,
    title: "100% Web-Based",
    description:
      "Work directly from your browser. No installations, no configurations, just pure productivity.",
    gradient: "from-violet-400 to-violet-600",
    glow: "violet",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Starting at just $5/month. The most competitive pricing in the industry without compromising quality.",
    gradient: "from-emerald-400 to-emerald-600",
    glow: "emerald",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security. Your data is protected with state-of-the-art security measures.",
    gradient: "from-amber-400 to-amber-600",
    glow: "amber",
  },
  {
    icon: Cpu,
    title: "Auto Scaling",
    description:
      "Automatically scale resources based on demand. Never worry about traffic spikes again.",
    gradient: "from-rose-400 to-rose-600",
    glow: "rose",
  },
  {
    icon: Cloud,
    title: "Global CDN",
    description:
      "Content delivered from 200+ edge locations. Your users get the fastest experience possible.",
    gradient: "from-sky-400 to-sky-600",
    glow: "sky",
  },
];

const glowColors: Record<string, string> = {
  cyan: "group-hover:shadow-cyan-500/30",
  violet: "group-hover:shadow-violet-500/30",
  emerald: "group-hover:shadow-emerald-500/30",
  amber: "group-hover:shadow-amber-500/30",
  rose: "group-hover:shadow-rose-500/30",
  sky: "group-hover:shadow-sky-500/30",
};

const iconBgColors: Record<string, string> = {
  cyan: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
  violet: "bg-violet-500/10 group-hover:bg-violet-500/20",
  emerald: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
  amber: "bg-amber-500/10 group-hover:bg-amber-500/20",
  rose: "bg-rose-500/10 group-hover:bg-rose-500/20",
  sky: "bg-sky-500/10 group-hover:bg-sky-500/20",
};

const iconColors: Record<string, string> = {
  cyan: "text-cyan-400 group-hover:text-cyan-300",
  violet: "text-violet-400 group-hover:text-violet-300",
  emerald: "text-emerald-400 group-hover:text-emerald-300",
  amber: "text-amber-400 group-hover:text-amber-300",
  rose: "text-rose-400 group-hover:text-rose-300",
  sky: "text-sky-400 group-hover:text-sky-300",
};

export function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
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
    <section id="features" ref={sectionRef} className="relative py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-delayed absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-green-500/5 to-transparent blur-[120px]" />
        <div className="animate-float absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-emerald-500/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground transition-all duration-500 md:text-4xl lg:text-5xl">
            Everything you need,{" "}
            <span className="bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
              nothing you don&apos;t
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Built from the ground up with developer experience in mind. Simple,
            powerful, and incredibly fast.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-border/60 hover:bg-card/50 hover:shadow-2xl ${glowColors[feature.glow]} ${
                visibleCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Icon glow effect */}
              <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-br from-current to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

              <div
                className={`relative flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 ${iconBgColors[feature.glow]}`}
              >
                <feature.icon
                  className={`h-7 w-7 transition-all duration-500 group-hover:scale-110 ${iconColors[feature.glow]}`}
                />
              </div>

              <h3 className="relative mt-6 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h3>

              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80">
                {feature.description}
              </p>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
