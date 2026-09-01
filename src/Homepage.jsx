import './Homepage.css'
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import LandingHero from './LandingHero.jsx';
import  HoverExpand  from "./components/hover-expand.jsx";
import bgimage from './assets/bg-image.jpg';
import { MotionAccordion } from './components/motion-faqs-accordion.jsx';
import SlideFillButton from './components/SlideFillButton.jsx';

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.";

const items = [
  {
    label: "Kyykkä Events",
    sublabel: "Training, tournaments, and events",
    description: description,
    linkText: "Learn more",
    href: "/projects/kyykka-events",
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

const contactSections = [
  {
    question: "Contact information",
    answer: (
      <>
        For any queries related to events, membership, or general inquiries,
        please contact us at{" "}
        <a href="mailto:board@vakary.fi" className="email-link">
          board@vakary.fi
        </a>
        .
        <br />
        We'll get back to you as soon as possible!
      </>
    ),
  },
  {
    question: "Invoicing information",
    answer: (
      <>
        For invoicing and billing-related questions, reach out to{" "}
        <a href="mailto:board@vakary.fi" className="email-link">
          board@vakary.fi
        </a>
        {" "}with your invoice details.
      </>
    ),
  },
  {
    question: "Sponsorships and media",
    answer: (
      <>
        Interested in sponsoring VAKA ry or covering our events? Contact us
        at{" "}
        <a href="mailto:board@vakary.fi" className="email-link">
          board@vakary.fi
        </a>
        {" "}for media and partnership inquiries.
      </>
    ),
  },
];



function Homepage() {

  const [showForm, setShowForm] = useState(false);
  const nodeRef = useRef(null);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  }

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

      <section className="member-section" id="members">
        <div className="member-section-header px-4">
          <h1>Members</h1>
        </div>
        <div className="member-section__inner">
          <p> We're always looking for new members to join our association!
          <br></br> <br></br> 
           Ideally, the member should be at least in the 2nd year of their studies, with some strong experience at their student guilds/union/associations from board work. 
           We value experience and achievements the most, irrespective of the board position, as well as the knowledge about the student culture and traditions.
          <br></br><br></br>
          If this describes you, please fill out the registration form by clicking the button below. 
          </p> 
          <div className="button-corner "> 
            <div className="form-button">
              <SlideFillButton
                label={showForm ? 'Hide Registration Form' : 'Registration Form'}
                onClick={handleFormToggle}
                width="100%"
                height="100%"
                rounded={30}
                padding={0}
                font={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: "0.2em",
                  textAlign: "left",
                }}
                water={{ color: '#0E87CC', direction: 'up', textColor: '#FFFFFF', waveSpeed: 50, defaultFill: 0 }}
                colors={{ fill: '#f2f5f6', textColor: '#141212' }}
                border={{ borderWidth: 2, borderStyle: 'solid', borderColor: '#00000030' }}

                // box-shadow — pass any valid CSS box-shadow string
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
              />
            </div>
          </div>

          <CSSTransition
            in={showForm}
            timeout={300}
            classNames="registration-form" 
            unmountOnExit
            nodeRef={nodeRef} >
            <div className="registration-form" ref={nodeRef} >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScK0oUf5fOAoolFihr802107wgenbFER7D-bCTf-FCNwVo-Tw/viewform?embedded=true"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="VAKA ry registration form"
                className="registration-form__iframe"
              />
            </div>
          </CSSTransition>
        </div>
      </section>

      <section className="home-section contact-us" id="join">
        <div className="contact-us-header px-4">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-us-content flex flex-column gap-6">
          <div className="contact-us-content-left">
            <MotionAccordion items={contactSections} gap={10} />
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
