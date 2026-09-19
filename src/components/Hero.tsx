"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import OrbitBadge from "@/components/OrbitBadge";
import { site } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pb-16 pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            [ open to ai/ml engineering roles ]
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block">Production</span>
            <span className="block text-accent-violet">AI Systems</span>
            <span className="block">Not Demos.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-md border-l-2 border-accent-violet/60 pl-4 text-muted"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground py-1.5 pl-6 pr-1.5 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Let&apos;s connect
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </a>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-medium text-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground"
            >
              <ArrowDownToLine size={14} />
              Download résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center gap-4"
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
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
        >
          <span className="absolute -top-8 right-0 hidden font-mono text-xs uppercase tracking-[0.3em] text-muted lg:block">
            [ build what ships ]
          </span>

          <span className="absolute left-[-2.75rem] top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-xs uppercase tracking-[0.4em] text-muted lg:block">
            AI / ML Engineer
          </span>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/headshot.jpg"
              alt={site.name}
              fill
              priority
              className="object-cover object-top grayscale contrast-125"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 mix-blend-color"
              style={{
                background:
                  "linear-gradient(115deg, var(--accent-violet) 0%, transparent 45%, transparent 55%, var(--accent-cyan) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-10">
            <OrbitBadge words="AI · ML · RAG · LLM ·" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
