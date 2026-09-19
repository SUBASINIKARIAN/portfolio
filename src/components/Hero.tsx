"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
        </span>
        Open to AI/ML engineering roles
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl"
      >
        Hi, I&apos;m {site.name} —{" "}
        <span className="text-gradient">{site.title}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-2xl text-balance text-lg text-muted"
      >
        {site.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
        >
          View Projects
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
        <a
          href="#contact"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 flex items-center justify-center gap-4"
      >
        {[
          { href: site.github, icon: GithubIcon, label: "GitHub" },
          { href: site.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
          { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
        ].map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
          >
            <Icon size={17} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
