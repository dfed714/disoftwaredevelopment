import "../App.scss";
import React, { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.remove("section-hidden");
    }
  }, [isIntersecting]);

  return (
    <div className="contact-body section section-hidden" ref={ref}>
      <h2>GET IN TOUCH NOW</h2>
      <p>Send us a message, we'd love to hear from you</p>
      <form
        name="DISD-Contact-Form"
        method="post"
        data-netlify="true"
        className="form"
        onSubmit={() => "submit"}
      >
        <input type="hidden" name="form-name" value="DISD-Contact-Form" />
        <p className="form-section">
          <input type="text" name="name" placeholder="Name *" required />
        </p>

        <p className="form-section">
          <input
            id="email-box"
            type="email"
            name="email"
            placeholder="Email *"
            required
          />
        </p>

        <p className="form-section">
          <input
            id="subject-box"
            type="text"
            name="subject"
            placeholder="Subject *"
            required
          />
        </p>

        <p className="form-section">
          <textarea
            type="text"
            id="msg-box"
            name="message"
            placeholder="Message *"
            required
          ></textarea>
        </p>

        <p>
          <button className="form-button" type="submit">
            SUBMIT
          </button>
        </p>
      </form>
    </div>
  );
}
