"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Documentation"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Community", "Help Center", "Partners", "Status"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Discord", href: "https://discord.gg/Ng74HXfVcC" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-gradient-to-b from-card/20 to-background backdrop-blur-sm">
      {/* Top glow effect */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-110">
                <Image
                  src="https://static.wikia.nocookie.net/thefakegees/images/9/9b/WeegeeHead.png/revision/latest/smart/width/250/height/250?cb=20120620225035"
                  alt="Weegee"
                  width={48}
                  height={48}
                  className="object-contain"
                  unoptimized
                />
                <div className="absolute inset-0 rounded-xl bg-accent/10 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
                Weegee
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The ultimate developer platform for building modern applications
              at scale. Join thousands of developers shipping faster.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-medium text-foreground">
                Subscribe to our newsletter
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-border/50 bg-card/30 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
                <button className="group relative overflow-hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div
              key={category}
              className="transition-all duration-500"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h4 className="font-semibold text-foreground">{category}</h4>
              <ul className="mt-5 space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="group relative inline-block text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1"
                      style={{ transitionDelay: `${linkIndex * 30}ms` }}
                    >
                      <span>{link}</span>
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-accent to-emerald-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            2026 Weegee. All rights reserved.
          </p>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm text-muted-foreground transition-all duration-300 hover:text-foreground"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-accent to-emerald-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
