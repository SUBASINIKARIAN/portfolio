import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";
import Period from "@/components/Period";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 py-24 sm:px-10 lg:px-16 xl:px-24"
    >
      <Reveal>
        <SectionHeading eyebrow="Projects" title="Things I've built" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-4">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.05 * i}>
            <article className="glass group flex h-full flex-col rounded-2xl p-6 transition-colors hover:bg-white/[0.06]">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="shrink-0 text-muted transition-colors hover:text-foreground"
                  >
                    <GithubIcon size={18} />
                  </a>
                )}
              </div>
              <p className="mt-1 text-xs text-muted">
                <Period range={project.period} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-3 space-y-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan"
                >
                  View repository
                  <ExternalLink size={14} />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
