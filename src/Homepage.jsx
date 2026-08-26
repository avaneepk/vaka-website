import './Homepage.css'
import LandingHero from './LandingHero.jsx';
import AccordionGallery from './AccordionGallery.jsx';
import fresherweeks from './assets/Fresher-weeks.jpg';


const eventItems = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Lake clean-up', link: '#join', alt: 'A rocky lakeside landscape' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Open-water swim', link: '#join', alt: 'A mountain ridge above water' },
  { image: fresherweeks, label: 'Fresher weeks', link: '#join', alt: 'A waterfall surrounded by greenery' },
  { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour gathering', link: '#join', alt: 'A harbour beside calm water' },
  { image: 'https://picsum.photos/id/1044/900/1200', label: 'Evening by the lake', link: '#join', alt: 'A city skyline near the water' }
];


function Homepage() {

  return (
    <main className="homepage">
        <LandingHero />
      <section className="home-section home-section--projects" id="projects">
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

      <section className="home-section home-section--events" id="activities">
        <div className="home-section__texture" aria-hidden="true" />
        <div className="home-section__events-inner">
          <div className="home-section__events-heading">
            <h1><span>Make waves.</span></h1>
            <p className="home-copy">Small actions, shared outdoors, become the events that bring our lake community together.</p>
          </div>
          <AccordionGallery items={eventItems} defaultIndex={2} height={390} expandRatio={0.5} />
        </div>
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
