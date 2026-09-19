export type Region = "IN" | "EU" | "default";

export type PeriodRange = {
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM", or null for "Present" */
  end: string | null;
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function detectRegion(): Region {
  if (typeof Intl === "undefined") return "default";
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone === "Asia/Kolkata" || timeZone === "Asia/Calcutta") {
      return "IN";
    }
    if (timeZone.startsWith("Europe/")) {
      return "EU";
    }
  } catch {
    // Intl not available or resolution failed — fall through to default.
  }
  return "default";
}

function formatMonth(ym: string, region: Region): string {
  const [year, month] = ym.split("-");
  if (region === "IN") {
    return `${MONTHS[Number(month) - 1]} ${year}`;
  }
  // EU and default both use the numeric Europass-style MM/YYYY.
  return `${month}/${year}`;
}

export function formatPeriod(range: PeriodRange, region: Region): string {
  const start = formatMonth(range.start, region);
  const end = range.end ? formatMonth(range.end, region) : "Present";
  return `${start} – ${end}`;
}
