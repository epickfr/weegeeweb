"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: "< 50ms", label: "Response Time" },
  { value: "99.99%", label: "Uptime" },
  { value: "10M+", label: "API Calls" },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      {/* Animated background shader effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="animate-pulse-glow absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/25 via-emerald-500/20 to-transparent blur-[140px]" />
        
        {/* Secondary floating glow */}
        <div className="animate-float absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-emerald-500/15 via-green-400/10 to-transparent blur-[120px]" />
        
        {/* Tertiary glow */}
        <div className="animate-float-delayed absolute left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-lime-500/10 via-emerald-400/10 to-transparent blur-[100px]" />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div
          className={`mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm text-accent">Now in Public Beta</span>
        </div>

        <h1
          className={`text-balance text-5xl font-bold tracking-tight text-foreground transition-all duration-700 delay-100 md:text-7xl lg:text-8xl ${
            mounted ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-sm"
          }`}
        >
          The Ultimate
          <br />
          <span className="animate-gradient animate-text-glow relative bg-gradient-to-r from-accent via-emerald-400 to-lime-300 bg-clip-text text-transparent">
            Developer Platform
          </span>
        </h1>

        <p
          className={`mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground transition-all duration-700 delay-200 md:text-xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          The most powerful and affordable cloud platform for modern developers.
          Ship faster with enterprise-grade infrastructure.
        </p>

        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full px-8 font-medium transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
          >
            <span className="relative z-10 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="animate-shimmer absolute inset-0" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden rounded-full border-border/50 bg-card/30 px-8 font-medium backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-accent/50 hover:bg-card/60 hover:shadow-lg"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">
              View Demos
            </span>
          </Button>
        </div>

        {/* Stats */}
        <div
          className={`mx-auto mt-24 max-w-2xl transition-all duration-700 delay-500 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative rounded-2xl border border-border/30 bg-card/20 p-8 backdrop-blur-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent" />
            <div className="relative grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group text-center transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-foreground transition-all duration-300 group-hover:text-accent md:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
