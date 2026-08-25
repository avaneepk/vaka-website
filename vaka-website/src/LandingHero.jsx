import { useEffect, useRef } from 'react';
import './Homepage.css'
import StrokeText from './StrokeText.jsx';
import vakaLogo from './assets/vaka-logo.png';
import waves from './assets/waves (9).svg';
import Navbar from './navbar.jsx';


function LandingHero() {
  const waveTrackRef = useRef(null);

  useEffect(() => {
    const track = waveTrackRef.current;
    if (!track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let animationFrame = null;
    let lastScrollY = window.scrollY;

    const updateWave = () => {
      animationFrame = null;
      const scrollDelta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      // Scroll down moves the ribbon left; scrolling back reverses its direction.
      const currentOffset = Number(track.dataset.offset || 0);
      const nextOffset = (currentOffset - scrollDelta * 0.80) % window.innerWidth;
      track.dataset.offset = String(nextOffset);
      track.style.setProperty('--wave-offset', `${nextOffset}px`);
    };

    const handleScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateWave);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main className="homepage">
      <Navbar />
      <section className="home-section home-section--navy" id="about">
        <div className="home-section-content">
            <div className="home-section__texture" aria-hidden="true" />

            <div className="home-section__center">
                
                <div className="home-section_left">
                <StrokeText
                    />
                <p className="home-copy">Vesijarven Academic Kippistely Association VAKA ry is a 
                    student culture association for the students of LUT and LAB universities in Lahti</p>
                <a className="home-action" href="#mission">Discover our story<span aria-hidden="true">-&gt;</span></a>
                </div>
                <div className="logo-graphic">
                <img src={vakaLogo} alt="Vaka ry logo" />
                </div>
            </div>
        </div>
        <div className="home-section-wave" aria-hidden="true">
          <div className="home-wave-track" ref={waveTrackRef}>
            <img src={waves} alt="" />
            <img src={waves} alt="" />
          </div>
        </div>
      </section>
    </main>
)
}

export default LandingHero;