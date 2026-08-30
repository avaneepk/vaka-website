import './Homepage.css'
import LandingHero from './LandingHero.jsx';
import  HoverExpand  from "./components/hover-expand.jsx";
import bgimage from './assets/bg-image.jpg';

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.";

const items = [
  {
    label: "Kyykkä Events",
    sublabel: "Training, tournaments, and events",
    description: description,
    image: bgimage,
  },
  {
    label: "Vaka Podcast",
    sublabel: "Discussions and interviews",
    description: "Sunlit hills and crumbling azulejo facades",
    image: bgimage,
  },
  {
    label: "Sitz Toastmasters",
    sublabel: "Training and support",
    description: "A labyrinth of souks washed in saffron light",
    image: bgimage,
  },
  {
    label: "Student Museum",
    sublabel: "Maintenance and operations",
    description: "A labyrinth of souks washed in saffron light",
    image: bgimage,
  },
  {
    label: "Wappu and Fresher Events",
    sublabel: "Cultural events and activities",
    description: "A labyrinth of souks washed in saffron light",
    image: bgimage,
  },
  {
    label: "Wappu Magazine",
    sublabel: "",
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
        <div className="project-header mb-10">
          <h1><span>Projects</span></h1>
        </div>
        <div className="home-section__mission-grid">
        <HoverExpand items={items} />
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
          <h1>Contact Us</h1>
        </div>
        <div className="contact-us-content flex flex-column gap-6">
          <div className="contact-us-content-left">
            <p>For any queries related to events, 
              membership, marketing, corporate relations, or general inquiries, 
              please contact us at <a href="mailto:board@vakary.fi" className="email-link">board@vakary.fi</a>.
              <br />
              We'll get back to you as soon as possible!</p>
            
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
