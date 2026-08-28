"use client";

import { useEffect, useState } from "react";
import "./poster.css";

type SheetSize = "tabloid" | "letter";

export default function CampaignPosterPage() {
  const [size, setSize] = useState<SheetSize>("tabloid");

  useEffect(() => {
    document.documentElement.dataset.posterPage = size;
    return () => {
      delete document.documentElement.dataset.posterPage;
    };
  }, [size]);

  return (
    <div className="poster-root">
      <header className="poster-toolbar poster-screen-only">
        <p>
          Print this page. Background graphics on. Margins none. Paper:{" "}
          {size === "tabloid" ? "Tabloid 11×17 in" : "Letter 8.5×11 in"}.
        </p>
        <button
          type="button"
          className="size-btn"
          aria-pressed={size === "tabloid"}
          onClick={() => setSize("tabloid")}
        >
          Tabloid
        </button>
        <button
          type="button"
          className="size-btn"
          aria-pressed={size === "letter"}
          onClick={() => setSize("letter")}
        >
          Letter
        </button>
        <button type="button" className="print-btn" onClick={() => window.print()}>
          Print
        </button>
      </header>

      <div className="poster-stage">
        <article
          className="poster-sheet"
          data-size={size}
          aria-label="Campaign poster for Sid Darak"
        >
          <span className="poster-stripe" aria-hidden />
          <span className="poster-rule" aria-hidden />

          <div className="poster-body">
            <div className="poster-copy">
              <h1 className="poster-name">
                Sid
                <br />
                Darak
              </h1>
              <p className="poster-for">for</p>
              <p className="poster-office">Communications Chair</p>
              <p className="poster-slogan">
                Find what’s happening. More to show up for. Tell the student
                side.
              </p>
            </div>

            <div className="poster-frame-wrap">
              <div className="poster-frame">
                <div
                  className="poster-frame-inner"
                  role="img"
                  aria-label="Portrait of Sid Darak."
                />
              </div>
            </div>

            <div className="poster-bar">
              <p className="poster-chip">Vote Sep 2–5</p>
              <div>
                <p className="poster-meta">
                  Find what’s happening · More to show up for · Tell the student side
                </p>
                <p className="poster-url">siddarak.com</p>
              </div>
              <p className="poster-legal">Siddhesh Darak</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
