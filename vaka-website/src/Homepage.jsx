import './Homepage.css'
import LandingHero from './LandingHero.jsx';


function Homepage() {

  return (
    <main className="homepage">
        <LandingHero />
      <section className="home-section home-section--mist" id="mission">
        <div className="home-section__texture" aria-hidden="true" />
        <div className="home-section__mission-grid">
        
          <div className="home-instagram-embed" aria-label="VAKA ry Instagram profile">
            <iframe
              title="VAKA ry Instagram profile"
              src="https://www.instagram.com/vaka.ry/embed"
              loading="lazy"
              className="home-instagram-embed__frame"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <a
              className="home-instagram-embed__link"
              href="https://www.instagram.com/vaka.ry/"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </div>
        </div>
      </section>

      <section className="home-section home-section--coral" id="activities">
        <div className="home-section__texture" aria-hidden="true" />
        <div className="home-section_left">
          <p className="home-eyebrow"><span>03</span>Get involved</p>
          <h1><span>Good energy.</span><span>Real action.</span></h1>
          <p className="home-copy">From shoreline cleanups to summer gatherings, there is always a way to take part.</p>
          <a className="home-action" href="#community">See activities<span aria-hidden="true">-&gt;</span></a>
        </div>
        <p className="home-scroll-hint" aria-hidden="true">Scroll to explore</p>
      </section>

      <section className="home-section home-section--blue" id="community">
        <div className="home-section__texture" aria-hidden="true" />
        <div className="home-section__inner">
          <p className="home-eyebrow"><span>04</span>The people</p>
          <h1><span>One lake.</span><span>Many stories.</span></h1>
          <p className="home-copy">Meet the people making small, meaningful changes across Lahti and beyond.</p>
          <a className="home-action" href="#join">Meet the community<span aria-hidden="true">-&gt;</span></a>
        </div>
        <p className="home-scroll-hint" aria-hidden="true">Scroll to explore</p>
      </section>

      <section className="home-section home-section--gold" id="join">
        <div className="home-section__texture" aria-hidden="true" />
        <div className="home-section__inner">
          <p className="home-eyebrow"><span>05</span>Your next step</p>
          <h1><span>Come</span><span>as you are.</span></h1>
          <p className="home-copy">Join Vaka ry and help keep Lake Vesijarvi clear, lively, and ours for generations.</p>
          <a className="home-action" href="#about">Join Vaka ry<span aria-hidden="true">-&gt;</span></a>
        </div>
        <p className="home-scroll-hint" aria-hidden="true">Back to top</p>
      </section>
    </main>
  )
}

export default Homepage
