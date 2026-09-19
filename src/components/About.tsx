import { about, skills } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="About" title="Who I am" />
      </Reveal>

      <Reveal delay={0.05}>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          {about.summary}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {about.highlights.map((h) => (
            <div key={h.label} className="glass rounded-2xl p-5 text-center">
              <p className="text-2xl font-semibold text-gradient sm:text-3xl">
                {h.value}
              </p>
              <p className="mt-1 text-xs text-muted">{h.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={0.05 * i}>
            <div className="glass h-full rounded-2xl p-5">
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
