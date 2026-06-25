import Link from "next/link";

const timeline = [
    {
        year: "2025",
        entries: [
            <>
                researcher at{" "}
                <a
                    href="https://matteroftechlab.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#0d1e3d]/30 underline-offset-2 hover:opacity-60 transition-opacity"
                >
                    matter of tech lab
                </a>
                .
            </>,
            <>
                starting my <strong>MS at Cornell</strong> — Applied Information Science
                & Information Systems with a Health Tech focus.
            </>,
            <>moved to <strong>new york city</strong>.</>,
            <>
                left <strong>ZS Associates</strong> — supported incentive compensation
                systems for pharma clients in the GLP-1 and weight loss therapeutics space.
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
                published my first paper at{" "}
                <a
                    href="https://link.springer.com/chapter/10.1007/978-3-031-71391-0_23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#0d1e3d]/30 underline-offset-2 hover:opacity-60 transition-opacity"
                >
                    ICIVC 2023
                </a>
                .
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
                    className="underline decoration-[#0d1e3d]/30 underline-offset-2 hover:opacity-60 transition-opacity"
                >
                    &quot;Current Indian Car Market and EV Adaptation&quot;
                </a>{" "}
                in IJRASET.
            </>,
        ],
    },
    {
        year: "2020",
        entries: [
            <>
                started <strong>Bachelors in Computer Engineering</strong> at NMIMS University (MPSTME, Shirpur).
            </>,
            <>
                joined <strong>UAS NMIMS</strong>.
            </>,
            <>
                Finished class XII at <strong>Rajhans Vidyalaya</strong>, Mumbai.
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
    <>president — UAS NMIMS (unmanned aerial systems R&D, Jun 2020 – May 2024)</>,
    <>campus representative — MPSTME student council (1,800 students)</>,
    <>president — &quot;saturday 10AM@NMIMS&quot; (industry engagement sessions, Aug 2021 – May 2024)</>,
    <>corporate relations head — Protsahan&apos;23 (NMIMS cultural fest)</>,
    <>
        <a
            href="https://www.credly.com/badges/c5eab0bd-afec-4ab3-b295-be594ae2f93d"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#0d1e3d]/30 underline-offset-2 hover:opacity-60 transition-opacity"
        >
            IBM AI/ML graduate
        </a>
        {" "}— NLP, pattern & anomaly detection, applied ML
    </>,
    <>
        <a
            href="https://www.credly.com/users/siddhesh-darak.603abb49/badges#credly"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#0d1e3d]/30 underline-offset-2 hover:opacity-60 transition-opacity"
        >
            AWS
        </a>
        , PwC, Accenture, HP
    </>,
];

export default function AboutPage() {
    return (
        <div className="min-h-screen px-6 py-16 selection:bg-[#e0f2fe] selection:text-[#0d1e3d]">
            <div className="w-full max-w-[640px] mx-auto">
                <Link
                    href="/"
                    className="text-sm text-[#0d1e3d]/50 hover:text-[#0d1e3d] transition-colors"
                >
                    ← back to home
                </Link>

                <h1 className="text-2xl font-bold tracking-tight mt-10 mb-12 uppercase">
                    My Story
                </h1>

                {timeline.map((block, blockIdx) => (
                    <div key={block.year}>
                        {blockIdx > 0 && (
                            <div className="border-t border-[#0d1e3d]/10 my-10" />
                        )}
                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#0d1e3d]/40 mb-6">
                            {block.year}
                        </h2>
                        <div className="space-y-4">
                            {block.entries.map((entry, entryIdx) => (
                                <p
                                    key={entryIdx}
                                    className="text-sm text-[#0d1e3d]/80 leading-relaxed"
                                >
                                    {entry}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="border-t border-[#0d1e3d]/10 my-10" />

                <h2 className="text-xs font-bold uppercase tracking-widest text-[#0d1e3d]/40 mb-6">
                    Other Things
                </h2>
                <ul className="space-y-2.5">
                    {otherThings.map((item, i) => (
                        <li
                            key={i}
                            className="text-sm text-[#0d1e3d]/60 leading-relaxed"
                        >
                            • {item}
                        </li>
                    ))}
                </ul>

                <div className="mt-16 text-center">
                    <Link
                        href="/"
                        className="text-xs text-[#0d1e3d]/40 hover:text-[#0d1e3d] transition-colors"
                    >
                        ← back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
