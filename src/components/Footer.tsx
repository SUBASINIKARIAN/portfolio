import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-muted">
      © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind.
    </footer>
  );
}
