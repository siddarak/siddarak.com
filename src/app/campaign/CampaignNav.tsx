"use client";

import Link from "next/link";

export default function CampaignNav() {
  return (
    <header className="campaign-nav">
      <div className="campaign-nav-inner">
        <Link className="campaign-brand" href="/me">
          Sid Darak
        </Link>
        <a className="campaign-vote-pill" href="#vote">
          Vote Sep 2–5
        </a>
      </div>
    </header>
  );
}
