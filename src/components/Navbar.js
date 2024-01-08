import { useRef } from "react";
import Contact from "./Contact";
import "../App.scss";

export default function Navbar() {
  const xOutMenu = () => {
    menu.current.classList.remove("fade-in-animation");
    menu.current.classList.add("fade-out-animation");
    setTimeout(() => menu.current.classList.add("display-none"), 200);
  };
  const menu = useRef();

  const navFunc = (n) => {
    document.querySelector(`.${n}-body`).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    xOutMenu();
  };
  return (
    <>
      <header className="navbar">
        <div className="nav-btn-container">
          <button
            className="nav-btn"
            aria-label="Get a quote"
            onClick={() => navFunc("contact")}
          >
            QUOTE
          </button>
        </div>
        <div className="nav-btn-container">
          <button className="nav-btn logo" aria-label="Home">
            DI
          </button>
        </div>
        <div className="desktop-nav-btns">
          <button
            className="nav-btn"
            aria-label="Menu"
            onClick={() => navFunc("services")}
          >
            SERVICES
          </button>
          <button
            className="nav-btn"
            aria-label="Menu"
            onClick={() => navFunc("projects")}
          >
            TESTIMONIALS
          </button>
          <button
            className="nav-btn"
            aria-label="Menu"
            onClick={() => navFunc("contact")}
          >
            CONTACT
          </button>
        </div>
        <div className="nav-btn-container">
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
        </div>
      </header>
      <div className="menu display-none" ref={menu}>
        <button
          className="nav-btn"
          aria-label="Menu"
          onClick={() => navFunc("services")}
        >
          SERVICES
        </button>
        <button
          className="nav-btn"
          aria-label="Menu"
          onClick={() => navFunc("projects")}
        >
          TESTIMONIALS
        </button>
        <button
          className="nav-btn"
          aria-label="Menu"
          onClick={() => navFunc("contact")}
        >
          CONTACT
        </button>
        <button className="x-out" onClick={xOutMenu}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
    </>
  );
}
