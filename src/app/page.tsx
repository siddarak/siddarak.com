import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 selection:bg-[#fff0df] selection:text-[#083a3f]">
      <div className="w-full max-w-[640px] text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/my-profile.jpg"
            alt="Siddhesh Darak"
            width={96}
            height={96}
            className="rounded-full object-cover object-top w-[96px] h-[96px] mb-4 shadow-sm"
            priority
          />
          <h1 className="text-2xl font-bold tracking-tight mt-2">
            Siddhesh Darak
          </h1>
          <div className="text-base text-[#083a3f]/80 mt-1.5 leading-snug">
            <p>
              researcher @{" "}
              <a
                href="https://matteroftechlab.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity underline decoration-[#083a3f]/30 underline-offset-2"
              >
                matter of tech lab
              </a>
            </p>
            <p className="mt-0.5 italic">cornell grad, building in nyc</p>
          </div>
        </div>

        <div className="border-t border-[#083a3f]/10 my-6" />

        <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-20 text-left">
          <div className="space-y-4">
            <Link
              href="/projects"
              className="block text-lg hover:opacity-60 transition-opacity"
            >
              &gt; my projects
            </Link>
            <Link
              href="/about"
              className="block text-lg hover:opacity-60 transition-opacity"
            >
              &gt; my story
            </Link>

            <Link
              href="/resume"
              className="block text-lg hover:opacity-60 transition-opacity"
            >
              &gt; my resume
            </Link>
          </div>

          <div className="space-y-4">
            <a
              href="https://www.linkedin.com/in/siddheshdarak/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:opacity-60 transition-opacity"
            >
              &gt; linkedin
            </a>

            <a
              href="https://www.instagram.com/daraksiddhesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:opacity-60 transition-opacity"
            >
              &gt; instagram
            </a>
            <div className="flex items-center gap-2">
              <a
                href="mailto:siddheshdarak@gmail.com"
                className="text-lg hover:opacity-60 transition-opacity"
              >
                &gt; get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
