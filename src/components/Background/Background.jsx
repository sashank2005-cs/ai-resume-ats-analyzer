import Aurora from "./Aurora";
import Grid from "./Grid";
import FloatingOrbs from "./FloatingOrbs";

function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Main theme-aware background */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* Soft central illumination */}
      <div
        className="
          absolute left-1/2 top-[-18rem]
          h-[42rem] w-[42rem]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-[140px]
        "
      />

      {/* Aurora gradient system */}
      <Aurora />

      {/* Futuristic grid */}
      <Grid />

      {/* Floating ambient lights */}
      <FloatingOrbs />

      {/* Central radial illumination */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.10),transparent_42%)]
        "
      />

      {/* Edge vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(2,6,23,0.10)_100%)]
        "
      />

      {/* Bottom fade so later sections stay readable */}
      <div
        className="
          absolute inset-x-0 bottom-0
          h-[30rem]
          bg-gradient-to-t
          from-[var(--bg)]
          via-[var(--bg)]/60
          to-transparent
        "
      />

      {/* Very subtle texture */}
      <div
        className="
          absolute inset-0
          opacity-[0.025]
          bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          bg-[length:7px_7px]
        "
      />
    </div>
  );
}

export default Background;