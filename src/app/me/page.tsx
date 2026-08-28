"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const INK = "oklch(0.28 0.07 48)";
const INK_MUTED = "oklch(0.50 0.06 52)";
const BORDER = "oklch(0.85 0.05 55)";

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-label="Instagram">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Email">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconButton({
  href,
  children,
  external,
  label,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  label?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center justify-center rounded-lg transition-all hover:opacity-60"
      style={{ width: 38, height: 38, border: `1px solid ${BORDER}`, color: INK_MUTED }}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let startY = 0;
    const onWheel = (e: WheelEvent) => { if (e.deltaY > 30) router.push("/about"); };
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => { if (startY - e.changedTouches[0].clientY > 50) router.push("/about"); };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [router]);

  return (
    <div
      className="h-[100dvh] w-screen overflow-hidden flex flex-col px-10 py-8"
      style={{ background: "oklch(0.95 0.04 55)", color: INK }}
    >
      {/* Top: nav links */}
      <nav className="flex justify-end gap-7" style={{ fontSize: "clamp(0.72rem, 1.8vw, 0.82rem)" }}>
        <Link href="/" className="hover:opacity-50 transition-opacity" style={{ color: INK_MUTED }}>campaign</Link>
        <Link href="/projects" className="hover:opacity-50 transition-opacity" style={{ color: INK_MUTED }}>projects</Link>
        <Link href="/about" className="hover:opacity-50 transition-opacity" style={{ color: INK_MUTED }}>story</Link>
        <Link href="/resume" className="hover:opacity-50 transition-opacity" style={{ color: INK_MUTED }}>resume</Link>
      </nav>

      {/* Middle: profile */}
      <div className="flex-1 flex flex-col justify-center max-w-sm">
        <Image
          src="/my-profile.jpg"
          alt="Siddhesh Darak"
          width={68}
          height={68}
          className="rounded-full object-cover object-top mb-5"
          style={{
            width: "clamp(52px, 6vw, 68px)",
            height: "clamp(52px, 6vw, 68px)",
            boxShadow: `0 0 0 2px ${BORDER}`,
          }}
          priority
        />
        <h1
          className="font-bold tracking-tight leading-none"
          style={{ fontSize: "clamp(1.3rem, 3.5vw, 1.9rem)", color: INK }}
        >
          Siddhesh Darak
        </h1>
        <p
          className="mt-1.5 italic"
          style={{ fontSize: "clamp(0.68rem, 1.6vw, 0.78rem)", color: INK_MUTED }}
        >
          cornell tech ms · nyc
        </p>

        <div
          className="mt-6 pt-5 flex flex-col gap-1.5"
          style={{ borderTop: `1px solid ${BORDER}`, fontSize: "clamp(0.68rem, 1.6vw, 0.76rem)", color: INK_MUTED }}
        >
          <span>ms · applied information science</span>
          <span>computer vision · drones · ai reasoning</span>
        </div>
      </div>

      {/* Bottom: social icon buttons — vertical stack, right aligned */}
      <div className="flex flex-col items-end gap-2">
        <IconButton href="https://www.linkedin.com/in/siddheshdarak/" external label="LinkedIn">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/daraksiddhesh/" external label="Instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton href="mailto:sd2263@cornell.edu" label="Email Siddhesh Darak">
          <EmailIcon />
        </IconButton>
      </div>
    </div>
  );
}
