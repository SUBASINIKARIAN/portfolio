import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Background"
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2 text-accent-cyan">
              <GraduationCap size={18} />
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                Education
              </h3>
            </div>
            {education.map((edu) => (
              <div key={edu.degree}>
                <p className="font-medium text-foreground">{edu.degree}</p>
                <p className="mt-1 text-sm text-muted">{edu.school}</p>
                <div className="mt-2 flex justify-between text-xs text-muted">
                  <span>{edu.period}</span>
                  <span>{edu.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass h-full rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2 text-accent-violet">
              <Award size={18} />
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                Certifications & Awards
              </h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {cert.name}
                    </p>
                    <p className="text-xs text-muted">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted">
                    {cert.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
