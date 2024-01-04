import "../App.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <button className="nav-btn" aria-label="Get a quote">
        QUOTE
      </button>
      <button className="nav-btn logo" aria-label="Home">
        DI
      </button>
      <div className="desktop-nav-btns">
        <button className="nav-btn" aria-label="Menu">
          SERVICES
        </button>
        <button className="nav-btn" aria-label="Menu">
          TESTIMONIALS
        </button>
        <button className="nav-btn" aria-label="Menu">
          CONTACT
        </button>
      </div>
      <button className="menu-btn nav-btn" aria-label="Menu">
        MENU
      </button>
    </header>
  );
}
