import { experience } from "@/data/portfolio";
import Period from "@/components/Period";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-6 py-24 sm:px-10 lg:px-16 xl:px-24"
    >
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
      </Reveal>

      <div className="space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={0.05 * i}>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {job.role}{" "}
                  <span className="text-gradient">· {job.company}</span>
                </h3>
                <span className="text-sm text-muted">
                  <Period range={job.period} />
                </span>
              </div>
              <ul className="mt-4 grid gap-x-8 gap-y-2.5 xl:grid-cols-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
