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
  return (
    <>
      <header className="navbar">
        <div className="nav-btn-container">
          <button
            className="nav-btn"
            aria-label="Get a quote"
            onClick={() =>
              document.querySelector(".contact-body").scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
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
          onClick={() => {
            document.querySelector(".services-body").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            xOutMenu();
          }}
        >
          SERVICES
        </button>
        <button
          className="nav-btn"
          aria-label="Menu"
          onClick={() => {
            document.querySelector(".projects-body").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            xOutMenu();
          }}
        >
          TESTIMONIALS
        </button>
        <button
          className="nav-btn"
          aria-label="Menu"
          onClick={() => {
            document.querySelector(".contact-body").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            xOutMenu();
          }}
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
