import Link from "next/link";

const timeline = [
    {
        year: "2025",
        entries: [
            <>
                starting my <strong>MS at Cornell</strong> — Applied Information Science
                & Information Systems with a Health Tech focus.{" "}
                <strong>merit scholarship</strong> recipient.
            </>,
            <>
                moved to <strong>new york city</strong>. researcher at{" "}
                <a
                    href="https://matteroftechlab.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#083a3f]/30 underline-offset-2 hover:opacity-60 transition-opacity"
                >
                    matter of tech lab
                </a>
                .
            </>,
            <>
                left <strong>ZS Associates</strong> after a year of building anomaly
                detection systems, migrating platforms serving{" "}
                <strong>3,000+ pharmaceutical reps</strong>, and processing{" "}
                <strong>2M+ records</strong> on AWS EMR.
            </>,
        ],
    },
    {
        year: "2024",
        entries: [
            <>
                started full-time at <strong>ZS Associates</strong> in Pune as a
                Technology Solution Consulting Associate.
            </>,
            <>
                graduated <strong>B.Tech in Computer Engineering</strong> from NMIMS
                University (3.89/4).
            </>,
            <>
                worked as <strong>Presales Intern at Montran Corporation</strong> —
                payment infrastructure.
            </>,
        ],
    },
    {
        year: "2023",
        entries: [
            <>
                built an <strong>ASL recognition system</strong> — classified 29
                alphabets using Random Forest on <strong>87,000+ images</strong>.
                published my first paper at <strong>ICIVC 2023</strong>.
            </>,
            <>
                interned at <strong>IBM / Phemsoft</strong> — built a market basket
                analysis engine using the Apriori algorithm. full-stack Flask app with
                automated ETL pipelines.
            </>,
            <>
                <strong>precision agriculture</strong> — drone-based tree counting with
                YOLOv5s deep learning. <strong>95% accuracy across 500+ farmlands</strong>
                .
            </>,
        ],
    },
    {
        year: "2022",
        entries: [
            <>
                interned at <strong>Kiya.ai</strong> — automated internal system
                processes with Python in the Products Business Unit.
            </>,
            <>
                co-published{" "}
                <a
                    href="https://doi.org/10.22214/ijraset.2022.48213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#083a3f]/30 underline-offset-2 hover:opacity-60 transition-opacity"
                >
                    &quot;Current Indian Car Market and EV Adaptation&quot;
                </a>{" "}
                in IJRASET.
            </>,
            <>
                started at <strong>UAS NMIMS</strong> — VTOL prototyping,
                swarm simulations, autonomous flight planning.
            </>,
        ],
    },
    {
        year: "2020",
        entries: [
            <>
                started <strong>B.Tech at NMIMS University</strong> (MPSTME, Shirpur).
                elected <strong>campus representative</strong> — representing 1,800
                students.
            </>,
            <>
                Finished class XII at <strong>Rajhansa Vidyalaya</strong>, Mumbai.
            </>,
        ],
    },
    {
        year: "2018",
        entries: [
            <>
                Finished class X at <strong>Vibgyor High</strong>, Mumbai.
            </>,
        ],
    },
];

const otherThings = [
    "president — UAS NMIMS (unmanned aerial systems R&D, Jun 2020 – May 2024)",
    "campus representative — MPSTME student council (1,800 students)",
    "president — \"saturday 10AM@NMIMS\" (industry engagement sessions, Aug 2021 – May 2024)",
    "corporate relations head — Protsahan'23 (NMIMS cultural fest)",
    "IBM AI/ML graduate — NLP, pattern & anomaly detection, applied ML",
    "AWS, PwC, Accenture, HP certified",
];

export default function AboutPage() {
    return (
        <div className="min-h-screen px-6 py-16 selection:bg-[#fff0df] selection:text-[#083a3f]">
            <div className="w-full max-w-[640px] mx-auto">
                <Link
                    href="/"
                    className="text-sm text-[#083a3f]/50 hover:text-[#083a3f] transition-colors"
                >
                    ← back to home
                </Link>

                <h1 className="text-2xl font-bold tracking-tight mt-10 mb-12 uppercase">
                    My Story
                </h1>

                {timeline.map((block, blockIdx) => (
                    <div key={block.year}>
                        {blockIdx > 0 && (
                            <div className="border-t border-[#083a3f]/10 my-10" />
                        )}
                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#083a3f]/40 mb-6">
                            {block.year}
                        </h2>
                        <div className="space-y-4">
                            {block.entries.map((entry, entryIdx) => (
                                <p
                                    key={entryIdx}
                                    className="text-sm text-[#083a3f]/80 leading-relaxed"
                                >
                                    {entry}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="border-t border-[#083a3f]/10 my-10" />

                <h2 className="text-xs font-bold uppercase tracking-widest text-[#083a3f]/40 mb-6">
                    Other Things
                </h2>
                <ul className="space-y-2.5">
                    {otherThings.map((item) => (
                        <li
                            key={item}
                            className="text-sm text-[#083a3f]/60 leading-relaxed"
                        >
                            • {item}
                        </li>
                    ))}
                </ul>

                <div className="mt-16 text-center">
                    <Link
                        href="/"
                        className="text-xs text-[#083a3f]/40 hover:text-[#083a3f] transition-colors"
                    >
                        ← back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
