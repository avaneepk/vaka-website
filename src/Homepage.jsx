import './Homepage.css'
import LandingHero from './LandingHero.jsx';
import AccordionGallery from './AccordionGallery.jsx';
import  HoverExpand  from "./components/hover-expand.jsx";
import bgimage from './assets/bg-image.jpg';

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.";

const items = [
  {
    label: "Kyoto",
    sublabel: "Japan",
    description: description,
    image: bgimage,
  },
  {
    label: "Lisbon",
    sublabel: "Portugal",
    description: "Sunlit hills and crumbling azulejo facades",
    image: bgimage,
  },
  {
    label: "Marrakech",
    sublabel: "Morocco",
    description: "A labyrinth of souks washed in saffron light",
    image: bgimage,
  },
];


function Homepage() {

  return (
    <main className="homepage">
        <LandingHero />
      <section className="home-section home-section--projects" id="projects">
        <div className="home-section__texture" aria-hidden="true" />
        <div className="home-section__mission-grid">
        <HoverExpand items={items} />
        </div>
      </section>

      <section className="home-section home-section--events" id="activities">
        <div className="home-section__texture" aria-hidden="true" />
        <div className="home-section__events-inner">
          <div className="home-section__events-heading">
            <h1><span>Make waves.</span></h1>
            <p className="home-copy">Small actions, shared outdoors, become the events that bring our lake community together.</p>
          </div>
          <AccordionGallery  defaultIndex={2} height={390} expandRatio={0.5} />
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

      <section className="home-section contact-us" id="join">
        <div className="contact-us-header">
          <h2>Get in Touch</h2>
          <p>Have questions or want to learn more about Vaka ry? Reach out to us!</p>
        </div>
        <div className="contact-us-content">
          <div className="contact-us-content-left">
            
          </div>
          <div className="contact-us-content-right">
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
        </div>
      </section>
    </main>
  )
}

export default Homepage
