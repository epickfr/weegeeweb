"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function Discord() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="discord"
      className="relative overflow-hidden py-32"
    >
      {/* Discord blurple background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5865F2]/20 blur-[150px]" />
        <div className="animate-float absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#5865F2]/10 blur-[100px]" />
        <div className="animate-float-delayed absolute left-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-[#7289DA]/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={`relative overflow-hidden rounded-3xl border border-[#5865F2]/30 bg-gradient-to-br from-[#5865F2]/10 via-card/50 to-[#7289DA]/10 p-12 backdrop-blur-xl transition-all duration-1000 md:p-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5865F2]/0 via-[#5865F2]/30 to-[#5865F2]/0 opacity-50 animate-shimmer" />
          
          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#5865F2]/5 to-transparent" />

          <div className="relative flex flex-col items-center text-center">
            {/* Discord Logo */}
            <div
              className={`mb-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-[#5865F2]/40 blur-2xl" />
                <svg
                  className="relative h-20 w-20 text-[#5865F2] transition-transform duration-500 hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2
              className={`mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Join Our{" "}
              <span className="bg-gradient-to-r from-[#5865F2] to-[#7289DA] bg-clip-text text-transparent">
                Community
              </span>
            </h2>

            {/* Description */}
            <p
              className={`mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Connect with thousands of developers, get help, share your projects, 
              and stay updated with the latest news and announcements.
            </p>

            {/* Stats */}
            <div
              className={`mb-12 flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {[
                { value: "10K+", label: "Members" },
                { value: "24/7", label: "Active" },
                { value: "100+", label: "Channels" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#5865F2] md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="https://discord.gg/Ng74HXfVcC"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-full bg-[#5865F2] px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-[#5865F2]/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#5865F2]/40 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord Server
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] via-[#7289DA] to-[#5865F2] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          </div>

          {/* Floating particles */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="animate-float absolute h-2 w-2 rounded-full bg-[#5865F2]/30"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + i}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
