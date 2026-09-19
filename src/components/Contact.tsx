"use client";

import emailjs from "@emailjs/browser";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent-violet/60 focus:bg-white/[0.07]";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const data = new FormData(form);
      const name = data.get("name")?.toString().trim() ?? "";
      const email = data.get("email")?.toString().trim() ?? "";
      const message = data.get("message")?.toString().trim() ?? "";
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  }

  const configured = Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
  );

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <div className="glass-strong rounded-3xl px-8 py-16 sm:px-16">
          <div className="text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">intelligent</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Open to AI/ML engineering roles and interesting collaborations.
              Send a message and it&apos;ll go straight to my inbox.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-xl text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What are you working on?"
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-3 rounded-full bg-foreground py-1.5 pl-6 pr-1.5 text-sm font-semibold text-background transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "sending" ? "Sending" : "Send message"}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                  {status === "sending" ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <ArrowUpRight size={15} />
                  )}
                </span>
              </button>

              {status === "sent" && (
                <p className="text-xs font-medium text-accent-cyan">
                  Message sent — thanks, I&apos;ll reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs font-medium text-accent-fuchsia">
                  Something went wrong. Email me directly at{" "}
                  <span className="text-foreground">{site.email}</span>.
                </p>
              )}
              {status === "idle" && (
                <p className="text-xs text-muted">
                  {configured ? (
                    <>
                      Sends straight to{" "}
                      <span className="text-foreground">{site.email}</span>.
                    </>
                  ) : (
                    <>
                      Opens your email client, addressed to{" "}
                      <span className="text-foreground">{site.email}</span>.
                    </>
                  )}
                </p>
              )}
            </div>
          </form>

          <div className="mt-10 flex items-center justify-center gap-4">
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
