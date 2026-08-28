"use client";

import { useMemo, useState } from "react";

type Palette = {
  id: string;
  name: string;
  note: string;
  pine: string;
  pineDeep: string;
  punch: string;
  punchDark: string;
  paper: string;
  wash: string;
  ink: string;
};

const PALETTES: Palette[] = [
  {
    id: "pine-punch",
    name: "Pine + Punch · locked",
    note: "Recommended. Forest as the navy, magenta as the orange. Pink and green at poster weight — not mint, not Cornell.",
    pine: "#0F3D32",
    pineDeep: "#07241E",
    punch: "#F23D7A",
    punchDark: "#C41E5A",
    paper: "#FFF7F4",
    wash: "#E7F0EC",
    ink: "#10211C",
  },
  {
    id: "night-punch",
    name: "Night Punch",
    note: "Near-black field, same punch. More evening-formal, less “green party.” Still not Robbie blue.",
    pine: "#121212",
    pineDeep: "#0A0A0A",
    punch: "#FF3D7A",
    punchDark: "#D91F5C",
    paper: "#FAF6F2",
    wash: "#F0E8E4",
    ink: "#161414",
  },
  {
    id: "kelly-pink",
    name: "Kelly + Pink",
    note: "Brighter green, same candidacy structure. Funkier. Watch contrast on the punch.",
    pine: "#0B6B4A",
    pineDeep: "#084C35",
    punch: "#FF5CA8",
    punchDark: "#D63A86",
    paper: "#FFF8FB",
    wash: "#E5F6EE",
    ink: "#06281C",
  },
];

function contrastPreview(bg: string, fg: string) {
  const hex = (h: string) => {
    const n = h.replace("#", "");
    const v = parseInt(n, 16);
    const r = (v >> 16) & 255;
    const g = (v >> 8) & 255;
    const b = v & 255;
    const lin = (c: number) => {
      const x = c / 255;
      return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  };
  const L1 = hex(bg);
  const L2 = hex(fg);
  const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  return ratio.toFixed(1);
}

export default function CampaignStudio() {
  const [id, setId] = useState(PALETTES[0].id);
  const p = useMemo(
    () => PALETTES.find((x) => x.id === id) ?? PALETTES[0],
    [id],
  );

  const onPine = contrastPreview(p.pine, "#FFFFFF");
  const onPaper = contrastPreview(p.paper, p.ink);
  const punchOnPine = contrastPreview(p.pine, p.punch);

  return (
    <div
      style={{
        ["--pine" as string]: p.pine,
        ["--pine-deep" as string]: p.pineDeep,
        ["--punch" as string]: p.punch,
        ["--punch-dark" as string]: p.punchDark,
        ["--paper" as string]: p.paper,
        ["--wash" as string]: p.wash,
        ["--ink" as string]: p.ink,
        background: "var(--paper)",
        color: "var(--ink)",
        minHeight: "100dvh",
      }}
    >
      <header
        style={{
          background: "var(--pine)",
          color: "#fff",
          borderBottom: "3px solid var(--punch)",
          padding: "14px 22px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-campaign-display), Impact, sans-serif",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontSize: 18,
          }}
        >
          Sid Darak
        </span>
        <span
          style={{
            marginLeft: "auto",
            background: "var(--punch)",
            fontFamily: "var(--font-campaign-display), Impact, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            padding: "8px 14px",
            fontSize: 14,
            borderRadius: 999,
          }}
        >
          Vote Sep 2–5
        </span>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(240px, 320px) 1fr",
          minHeight: "calc(100dvh - 58px)",
        }}
        className="studio-shell"
      >
        <aside
          style={{
            background: "var(--wash)",
            borderRight: "1px solid color-mix(in srgb, var(--pine) 18%, transparent)",
            padding: 22,
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--punch-dark)",
              fontWeight: 800,
              margin: "0 0 8px",
            }}
          >
            Color studio
          </p>
          <h1
            style={{
              fontFamily: "var(--font-campaign-display), Impact, sans-serif",
              textTransform: "uppercase",
              fontSize: 28,
              lineHeight: 1,
              margin: "0 0 12px",
              color: "var(--pine)",
            }}
          >
            Pick a field.
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.55, margin: "0 0 20px" }}>
            Same poster bones as a real candidacy site. Not Cornell maroon. Not
            Robbie blue/orange. Switch palettes; the mock on the right is the
            test.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PALETTES.map((opt) => {
              const on = opt.id === p.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setId(opt.id)}
                  style={{
                    textAlign: "left",
                    cursor: "pointer",
                    border: on
                      ? "2px solid var(--pine)"
                      : "1px solid color-mix(in srgb, var(--pine) 20%, transparent)",
                    background: on ? "#fff" : "transparent",
                    padding: "12px 14px",
                    borderRadius: 10,
                    color: "var(--ink)",
                    fontFamily: "inherit",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      gap: 6,
                      marginBottom: 8,
                    }}
                  >
                    {[opt.pine, opt.punch, opt.paper, opt.ink].map((c) => (
                      <span
                        key={c}
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 3,
                          background: c,
                          border: "1px solid rgba(0,0,0,.15)",
                        }}
                      />
                    ))}
                  </span>
                  <strong style={{ display: "block", fontSize: 14 }}>
                    {opt.name}
                  </strong>
                  <span
                    style={{
                      display: "block",
                      fontSize: 12,
                      lineHeight: 1.45,
                      opacity: 0.8,
                      marginTop: 4,
                    }}
                  >
                    {opt.note}
                  </span>
                </button>
              );
            })}
          </div>
          <p style={{ fontSize: 12, margin: "22px 0 0", opacity: 0.75 }}>
            White on pine {onPine}:1 · ink on paper {onPaper}:1 · punch on pine{" "}
            {punchOnPine}:1 (body needs 4.5:1; large type 3:1).
          </p>
        </aside>

        <section style={{ overflow: "hidden" }}>
          <div
            style={{
              position: "relative",
              background: "var(--pine)",
              color: "#fff",
              padding: "56px 40px 64px",
              overflow: "hidden",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                right: "-8%",
                top: "-20%",
                bottom: "-30%",
                width: "42%",
                background: "var(--punch)",
                transform: "skewX(-14deg)",
              }}
            />
            <span
              aria-hidden
              style={{
                position: "absolute",
                right: "33%",
                top: "-20%",
                bottom: "-30%",
                width: 18,
                background: "#fff",
                transform: "skewX(-14deg)",
              }}
            />
            <div style={{ position: "relative", maxWidth: 520 }}>
              <h2
                style={{
                  fontFamily: "var(--font-campaign-display), Impact, sans-serif",
                  textTransform: "uppercase",
                  fontSize: "clamp(48px, 8vw, 84px)",
                  lineHeight: 0.9,
                  margin: 0,
                  textShadow: "4px 4px 0 color-mix(in srgb, var(--pine-deep) 70%, transparent)",
                }}
              >
                Sid
                <br />
                Darak
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-campaign-script), cursive",
                  fontSize: 32,
                  margin: "10px 0 4px",
                  color: "#FFD0E0",
                }}
              >
                for
              </p>
              <p
                style={{
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontSize: 18,
                  margin: 0,
                }}
              >
                Communications Chair
              </p>
              <p
                style={{
                  fontFamily: "var(--font-campaign-display), Impact, sans-serif",
                  textTransform: "uppercase",
                  fontSize: 26,
                  margin: "22px 0 0",
                }}
              >
                Make it easier to find what’s happening.
              </p>
            </div>
          </div>

          <div
            className="studio-cards"
            style={{
              padding: "36px 40px 48px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {["Find what’s happening", "More to show up for", "Tell the student side"].map(
              (title, i) => (
                <div
                  key={title}
                  style={{
                    background: "var(--wash)",
                    borderTop: "5px solid var(--punch)",
                    padding: "20px 18px 22px",
                    borderRadius: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-campaign-display), Impact, sans-serif",
                      color: "var(--punch)",
                      letterSpacing: "0.16em",
                      fontSize: 13,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-campaign-display), Impact, sans-serif",
                      textTransform: "uppercase",
                      fontSize: 22,
                      margin: "8px 0 0",
                      color: "var(--pine)",
                    }}
                  >
                    {title}
                  </h3>
                </div>
              ),
            )}
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .studio-shell { display: block !important; }
          .studio-cards { grid-template-columns: 1fr !important; padding: 24px 18px 40px !important; }
        }
      `}</style>
    </div>
  );
}
