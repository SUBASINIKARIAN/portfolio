import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <div className="glass-strong rounded-3xl px-8 py-16 text-center sm:px-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">intelligent</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Open to AI/ML engineering roles and interesting collaborations.
            The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              <Mail size={16} />
              {site.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            >
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
