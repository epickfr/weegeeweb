"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-up">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav
          className={`flex items-center justify-between rounded-full border px-6 py-3 transition-all duration-500 ease-out ${
            scrolled
              ? "border-border/60 bg-card/80 shadow-lg shadow-black/20 backdrop-blur-2xl"
              : "border-border/30 bg-card/40 backdrop-blur-xl"
          }`}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20">
              <Image
                src="https://wiki.mfgg.net/images/5/5f/Weegee.gif"
                alt="Weegee"
                width={40}
                height={40}
                className="object-contain"
                unoptimized
              />
              <div className="absolute inset-0 rounded-lg bg-accent/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <span className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
              Weegee
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted-foreground transition-all duration-300 hover:text-foreground"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-accent to-emerald-400 transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </div>

          <Button className="group relative overflow-hidden rounded-full px-6 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
