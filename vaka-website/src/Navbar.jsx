import './Navbar.css';

function Navbar() {
    return (
        <main className="navbar">
            <nav className="home-nav" aria-label="Main navigation">
                <div className="home-nav__links">
                <a href="#mission">Home</a>
                </div>
                <div className="home-nav__links">
                <a href="#mission">About</a>
                </div>
                <div className="home-nav__links">
                <a href="#mission">Members</a>
                </div>
                <div className="home-nav__links">
                <a href="#mission">About</a>
                </div>
                <div className="home-nav__links">
                <a href="#contact">Contact us</a>
                </div>
            </nav>
        </main>
    )   
}

export default Navbar;