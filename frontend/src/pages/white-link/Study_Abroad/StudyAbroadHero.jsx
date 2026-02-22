import React from "react";

const StudyAbroadHero = ({ title, subtitle }) => {
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap');

        @keyframes sah-slide {
          0%   { left: -50%; }
          100% { left: 150%; }
        }
        @keyframes sah-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sah-anim-1 { animation: sah-fade-up 0.75s 0.05s cubic-bezier(.22,1,.36,1) both; }
        .sah-anim-2 { animation: sah-fade-up 0.75s 0.18s cubic-bezier(.22,1,.36,1) both; }
        .sah-anim-3 { animation: sah-fade-up 0.75s 0.30s cubic-bezier(.22,1,.36,1) both; }
        .sah-anim-4 { animation: sah-fade-up 0.75s 0.42s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      <section
        className="relative min-h-[72vh] flex flex-col justify-center items-center overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0a1628 0%, #0d2040 50%, #0a1a35 100%)",
        }}
      >
        {/* ── Blue orb top-right ── */}
        <div
          className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,102,179,0.22) 0%, transparent 65%)" }}
        />

        {/* ── Orange orb bottom-left ── */}
        <div
          className="absolute bottom-[40px] left-[-60px] w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(230,81,0,0.15) 0%, transparent 65%)" }}
        />

        {/* ── Teal orb center ── */}
        <div
          className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 65%)" }}
        />

        {/* ── Subtle grid pattern overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Content — fully centered ── */}
        <div className="relative z-[2] w-full max-w-[860px] mx-auto px-8 py-24 flex flex-col items-center text-center">

          {/* Badge */}
          <div
            className="sah-anim-1 inline-flex items-center gap-2.5 border border-white/15 text-white/80 text-[11px] font-bold tracking-[0.16em] uppercase px-5 py-2 rounded-full mb-8"
            style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full flex-shrink-0 bg-[#E65100]"
              style={{ boxShadow: "0 0 0 3px rgba(230,81,0,0.28)" }}
            />
            Study Abroad Guide
          </div>

          {/* Title */}
          <h1
            className="sah-anim-2 text-[clamp(2.8rem,6.5vw,5rem)] font-bold leading-[1.08] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "'Clash Display', 'Sora', sans-serif" }}
          >
            {firstPart && (
              <span className="text-white">{firstPart} </span>
            )}
            <span className="relative inline-block">
              <span
                style={{
                  background: "linear-gradient(118deg, #ff8534 0%, #E65100 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {lastWord}
              </span>
              {/* Orange underline accent */}
              <span
                className="absolute left-0 bottom-0.5 w-full h-[4px] rounded-sm"
                style={{
                  background: "linear-gradient(90deg, #E65100, transparent)",
                  opacity: 0.45,
                }}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="sah-anim-3 text-white/60 leading-[1.82] mb-10 max-w-[560px]"
            style={{
              fontSize: "clamp(1rem, 1.7vw, 1.18rem)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>

          {/* Scroll cue */}
          <div className="sah-anim-4 flex items-center gap-3">
            <span
              className="text-white/32 text-[10px] font-bold tracking-[0.14em] uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Scroll to explore
            </span>
            <div className="relative w-14 h-[2px] rounded-full overflow-hidden bg-white/10">
              <span
                className="absolute top-0 h-full w-[45%] rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, #E65100, transparent)",
                  animation: "sah-slide 2.2s ease-in-out infinite",
                }}
              />
            </div>
          </div>

        </div>

        {/* ── Bottom wave into StdyAbcnt white intro band ── */}
        <div className="absolute bottom-[-1px] left-0 right-0 z-[3] leading-[0]">
          <svg
            viewBox="0 0 1440 88"
            fill="none"
            preserveAspectRatio="none"
            className="w-full block"
            style={{ height: "88px" }}
          >
            <path
              d="M0 88V48C200 8 360 88 540 48C720 8 900 88 1080 48C1260 8 1380 68 1440 48V88H0Z"
              fill="#ffffff"
            />
          </svg>
        </div>

      </section>
    </>
  );
};

export default StudyAbroadHero;