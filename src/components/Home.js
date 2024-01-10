import "../App.scss";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  const navbar = document.querySelector(".navbar");
  const app = document.querySelector(".App");
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    try {
      if (!isIntersecting) {
        navbar.classList.add("fade-in-animation");
        navbar.classList.add("position-fixed");
        app.classList.add("margin-top-4sp");
      } else {
        navbar.classList.remove("fade-in-animation");
        navbar.classList.remove("position-fixed");
        app.classList.remove("margin-top-4sp");
      }
    } catch {
      console.error();
    }
  }, [isIntersecting]);
  return (
    <div className="home-body" ref={ref}>
      <div className="text">
        <h1 className="non-highlight">The</h1>
        <h1 className="highlight">efficient</h1>
        <h1 className="non-highlight">way to</h1>
        <h1 className="highlight">develop</h1>
        <button
          className="cta"
          onClick={() =>
            document.querySelector(".about-body").scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          Learn more <i className="fa-solid fa-arrow-down-long"></i>
        </button>
      </div>
      <img src="../../images/butterfly.png" alt="Butterfly" />
    </div>
  );
}
