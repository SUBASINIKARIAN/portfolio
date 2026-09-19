"use client";

import { useSyncExternalStore } from "react";
import { detectRegion, formatPeriod, type PeriodRange, type Region } from "@/lib/locale";

const subscribe = () => () => {};
const getSnapshot = (): Region => detectRegion();
const getServerSnapshot = (): Region => "default";

export default function Period({ range }: { range: PeriodRange }) {
  const region = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <>{formatPeriod(range, region)}</>;
}
