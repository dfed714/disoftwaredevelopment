import "../App.scss";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.remove("section-hidden");
    }
  }, [isIntersecting]);
  return (
    <div className="about-body section section-hidden" ref={ref}>
      <div className="text">
        <h2>SOFTWARE DEVELOPED FOR YOU</h2>
        <p>
          Designing and developing digital applications for your business needs
        </p>
      </div>
      <div className="testimonial">
        <blockquote>
          "WORKING WITH DI
          <br /> WAS A TRULY
          <br />
          <span className="highlight">REMARKABLE</span> EXPERIENCE!"
        </blockquote>
      </div>
    </div>
  );
}
