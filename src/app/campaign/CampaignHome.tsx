import Image from "next/image";
import Link from "next/link";
import CampaignNav from "./CampaignNav";

const MAIL = "mailto:sd2263@cornell.edu";

const PLANKS = [
  {
    n: "01",
    title: "Find what’s happening",
    lead: "On campus.",
    body: "Make existing communications easier to find and easier to use. Students should be able to see what is coming up and share questions or changes that matter to them.",
  },
  {
    n: "02",
    title: "More to show up for",
    lead: "With each other.",
    body: "Help create more events that students can gather around, including technical events such as hackathons. Work with clubs, CTSG, and what is already here. Add to it.",
  },
  {
    n: "03",
    title: "Tell the student side",
    lead: "Beyond campus.",
    body: "Help more employers, neighbors, and people we meet in New York understand what Cornell Tech is through the student experience. University communications is already doing important work. Student communications can support it.",
  },
] as const;

const MARQUEE = "Find what’s happening · More to show up for · Tell the student side";

export default function CampaignHome() {
  return (
    <div className="campaign-page" id="top">
      <a className="campaign-skip" href="#main">
        Skip to content
      </a>
      <CampaignNav />

      <main id="main">
        <section className="campaign-hero" aria-labelledby="campaign-name">
          <div className="campaign-hero-inner">
            <div className="campaign-hero-copy">
              <h1 id="campaign-name" className="campaign-hero-title">
                <span className="campaign-display">Siddhesh Darak</span>
                <span className="campaign-script">for</span>
                <span className="campaign-office">Communications Chair</span>
              </h1>
              <p className="campaign-lede">
                I’m running to make it easier to find what’s happening on
                campus, to help more things happen, and to share the student
                side of this place beyond campus.
              </p>
            </div>
            <div className="campaign-hero-visual">
              <span className="campaign-hero-stripes" aria-hidden />
              <figure className="campaign-hero-media">
                <Image
                  src="/campaign/sid-headshot.png"
                  alt="Siddhesh Darak"
                  width={400}
                  height={400}
                  priority
                  sizes="(max-width: 860px) 160px, 280px"
                  className="campaign-hero-photo"
                />
              </figure>
            </div>
          </div>
        </section>

        <div className="campaign-marquee" aria-hidden="true">
          <span className="campaign-marquee-track">
            {Array.from({ length: 8 }, (_, i) => (
              <span key={i} className="campaign-marquee-item">
                {MARQUEE}
              </span>
            ))}
          </span>
        </div>

        <section className="campaign-why" id="why">
          <div className="campaign-wrap campaign-why-grid">
            <div>
              <h2 className="campaign-h2">Why I’m running.</h2>
              <div className="campaign-prose">
                <p>
                  I have seen what student leadership can look like when people
                  are heard. As General Secretary in undergrad, I listened to
                  students, worked with administration, and helped bring events
                  together.
                </p>
                <p>
                  That work taught me that communication is not just sending
                  information. It is helping people find what is going on and
                  making it easier for them to speak up when something needs
                  attention.
                </p>
                <p>
                  There is already good work happening here. I’m running to
                  build on it — from the student side.
                </p>
              </div>
            </div>
            <figure className="campaign-why-media">
              <Image
                src="/campaign/sid-group.png"
                alt="Sid with classmates at a student gathering."
                width={1024}
                height={768}
                sizes="(max-width: 860px) 100vw, 380px"
                className="campaign-why-photo"
              />
            </figure>
          </div>
        </section>

        <section className="campaign-platform" id="platform">
          <div className="campaign-wrap campaign-platform-intro">
            <h2 className="campaign-h2">What I’ll work on.</h2>
          </div>
          <ol className="campaign-bands">
            {PLANKS.map((plank, i) => (
              <li
                key={plank.n}
                className={`campaign-band campaign-band-${i + 1}`}
              >
                <div
                  className={
                    plank.n === "03"
                      ? "campaign-band-inner campaign-band-inner--with-media"
                      : "campaign-band-inner"
                  }
                >
                  <span className="campaign-plank-n" aria-hidden>
                    {plank.n}
                  </span>
                  <div>
                    <h3>{plank.title}</h3>
                    <p className="campaign-plank-lead">{plank.lead}</p>
                    <p>{plank.body}</p>
                  </div>
                  {plank.n === "03" ? (
                    <figure className="campaign-band-media">
                      <Image
                        src="/photo-1.png"
                        alt="Roosevelt Island tram and the Queensboro Bridge at dusk."
                        width={576}
                        height={1024}
                        sizes="(max-width: 860px) 220px, 220px"
                        className="campaign-band-photo"
                      />
                    </figure>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="campaign-about" id="about">
          <div className="campaign-wrap campaign-about-grid">
            <div>
              <h2 className="campaign-h2">About Me</h2>
              <div className="campaign-prose">
                <p>
                  I’m a second-year MS student at Cornell Tech, studying Applied
                  Information Science in Health Tech. I’ve been here since 2025,
                  so I know the rhythm of campus: what students are looking for,
                  what gets people in the room, and where communication can be
                  clearer.
                </p>
                <p>
                  Before coming to Cornell Tech, I worked in technology
                  consulting at ZS Associates and in presales at Montran, a
                  payments infrastructure company. Those roles taught me how to
                  explain complicated things clearly, listen closely, and work
                  with people who need different things from the same
                  conversation.
                </p>
                <p>
                  Before Cornell Tech, I studied computer engineering at NMIMS,
                  where I was General Secretary of the student council,
                  representing about 1,800 students. I led the university drone
                  team and held various roles across multiple campus events.
                </p>
              </div>
            </div>
            <figure className="campaign-about-media">
              <Image
                src="/campaign/sid-nmims.png"
                alt="Sid Darak at NMIMS, in student council sash."
                width={1024}
                height={1024}
                sizes="220px"
                className="campaign-about-photo"
              />
            </figure>
          </div>
        </section>

        <section className="campaign-closer" id="vote">
          <div className="campaign-closer-inner">
            <h2>Vote for Sid Darak</h2>
            <p className="campaign-closer-sub">
              Communications Chair · Cornell Tech Student Government
            </p>
            <p className="campaign-closer-body">
              Voting is September 2–5. I’d be grateful for your vote.
            </p>
            <p className="campaign-closer-chip">Vote September 2–5</p>
          </div>
        </section>
      </main>

      <footer className="campaign-footer">
        <div className="campaign-footer-inner">
          <div className="campaign-footer-identity">
            <p>Sid Darak · Communications Chair</p>
            <Link className="campaign-footer-about" href="/me">
              About Me
            </Link>
          </div>
          <p>
            <a href={MAIL}>Questions?</a> I want to hear from you.
          </p>
        </div>
      </footer>
    </div>
  );
}
