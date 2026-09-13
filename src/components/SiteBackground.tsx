export function SiteBackground() {
  return (
    <div aria-hidden="true" className="site-background pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="site-grid absolute inset-0" />
      <div className="hero-spotlight absolute inset-0" />
      <div className="ambient-blob blob-a absolute" />
      <div className="ambient-blob blob-b absolute" />
      <div className="ambient-blob blob-c absolute" />
      <div className="ambient-blob blob-d absolute" />
      <div className="site-grain absolute inset-0" />
      <div className="site-vignette absolute inset-0" />
      <div className="corner-mark corner-tl" />
      <div className="corner-mark corner-tr" />
      <div className="corner-mark corner-bl" />
      <div className="corner-mark corner-br" />

      <style>{`
        .site-background { background: var(--background); }

        .site-grid {
          background-image:
            linear-gradient(to right, color-mix(in oklab, var(--primary) 10%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklab, var(--primary) 10%, transparent) 1px, transparent 1px);
          background-size: 56px 56px;
          -webkit-mask-image: radial-gradient(ellipse 85% 65% at 50% 0%, #000 35%, transparent 100%);
          mask-image: radial-gradient(ellipse 85% 65% at 50% 0%, #000 35%, transparent 100%);
          opacity: 0.7;
        }

        .hero-spotlight {
          background: radial-gradient(ellipse 65% 46% at 50% -4%, color-mix(in oklab, var(--primary) 16%, transparent) 0%, transparent 68%);
        }

        .ambient-blob {
          border-radius: 999px;
          filter: blur(70px);
          will-change: transform;
        }
        .blob-a {
          top: -14%;
          left: -10%;
          width: 48vw;
          height: 48vw;
          background: radial-gradient(circle, color-mix(in oklab, var(--primary) 26%, transparent) 0%, transparent 70%);
          animation: drift-a 34s ease-in-out infinite alternate;
        }
        .blob-b {
          top: 12%;
          right: -16%;
          width: 42vw;
          height: 42vw;
          background: radial-gradient(circle, color-mix(in oklab, var(--accent-2) 24%, transparent) 0%, transparent 70%);
          animation: drift-b 40s ease-in-out infinite alternate;
        }
        .blob-c {
          bottom: -18%;
          left: 18%;
          width: 46vw;
          height: 46vw;
          background: radial-gradient(circle, color-mix(in oklab, var(--accent-3) 22%, transparent) 0%, transparent 72%);
          animation: drift-c 44s ease-in-out infinite alternate;
        }
        .blob-d {
          top: 40%;
          left: 48%;
          width: 30vw;
          height: 30vw;
          background: radial-gradient(circle, color-mix(in oklab, var(--primary) 18%, transparent) 0%, transparent 72%);
          animation: drift-d 38s ease-in-out infinite alternate;
        }

        @keyframes drift-a {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5vw, 4vh) scale(1.12); }
          100% { transform: translate(-2vw, 6vh) scale(1.04); }
        }
        @keyframes drift-b {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-6vw, 5vh) scale(1.14); }
          100% { transform: translate(-3vw, -3vh) scale(1.02); }
        }
        @keyframes drift-c {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4vw, -5vh) scale(1.1); }
          100% { transform: translate(6vw, 2vh) scale(1.03); }
        }
        @keyframes drift-d {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(-4vw, 4vh) scale(1.18) rotate(20deg); }
        }

        .site-grain {
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }

        .site-vignette {
          background: radial-gradient(ellipse 90% 70% at 50% 0%, transparent 55%, var(--background) 100%);
        }

        .corner-mark {
          position: fixed;
          width: 22px;
          height: 22px;
          border-color: color-mix(in oklab, var(--primary) 30%, transparent);
          opacity: 0.9;
        }
        .corner-tl { top: 18px; left: 18px; border-top: 1px solid; border-left: 1px solid; }
        .corner-tr { top: 18px; right: 18px; border-top: 1px solid; border-right: 1px solid; }
        .corner-bl { bottom: 18px; left: 18px; border-bottom: 1px solid; border-left: 1px solid; }
        .corner-br { bottom: 18px; right: 18px; border-bottom: 1px solid; border-right: 1px solid; }
        @media (max-width: 900px) {
          .corner-mark { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ambient-blob { animation: none; }
        }

        @media (max-width: 640px) {
          .ambient-blob { filter: blur(44px); }
        }
      `}</style>
    </div>
  );
}
