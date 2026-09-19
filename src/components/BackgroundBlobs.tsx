export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background bg-grid"
    >
      <div className="absolute left-[-10%] top-[-10%] h-[38rem] w-[38rem] rounded-full bg-accent-violet/25 blur-[120px]" />
      <div className="absolute right-[-15%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-accent-cyan/20 blur-[120px]" />
      <div className="absolute bottom-[-15%] left-[20%] h-[34rem] w-[34rem] rounded-full bg-accent-fuchsia/15 blur-[130px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
