import { useRef } from "react";
import Contact from "./Contact";
import "../App.scss";

export default function Navbar() {
  const menu = useRef();
  return (
    <>
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
        <button
          className="menu-btn nav-btn"
          aria-label="Menu"
          onClick={() => {
            menu.current.classList.add("fade-in-animation");
            menu.current.classList.remove("fade-out-animation");
            menu.current.classList.remove("display-none");
          }}
        >
          MENU
        </button>
      </header>
      <div className="menu display-none" ref={menu}>
        <button className="nav-btn" aria-label="Menu">
          SERVICES
        </button>
        <button className="nav-btn" aria-label="Menu">
          TESTIMONIALS
        </button>
        <button className="nav-btn" aria-label="Menu">
          CONTACT
        </button>
        <button
          className="x-out"
          onClick={() => {
            menu.current.classList.remove("fade-in-animation");
            menu.current.classList.add("fade-out-animation");
            setTimeout(() => menu.current.classList.add("display-none"), 200);
          }}
        >
          X
        </button>
      </div>
    </>
  );
}
