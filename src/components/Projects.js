import "../App.scss";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect, useRef } from "react";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Projects() {
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

  const [projectData, setProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const slider = useRef();
  const dots = useRef();

  if (slider.current) {
    slider.current.style.transform = `translateX(calc(${slideIndex * -100}%`;
  }

  const dotStylingFunc = (n) => {
    if (dots.current) {
      [...dots.current.children].forEach((x) =>
        x.classList.remove("dot-active")
      );
      [...dots.current.children][slideIndex + n].classList.add("dot-active");
    }
  };

  const goToPreviousSlide = () => {
    if (slideIndex > 0) {
      dotStylingFunc(-1);
      setSlideIndex(slideIndex - 1);
      [...slider.current.children].forEach((x) => x.classList.add("hidden"));
      [...slider.current.children][slideIndex - 1].classList.remove("hidden");
    }
  };

  const goToNextSlide = () => {
    if (slideIndex < slider.current.children.length - 1) {
      dotStylingFunc(1);
      setSlideIndex(slideIndex + 1);
      [...slider.current.children].forEach((x) => x.classList.add("hidden"));
      [...slider.current.children][slideIndex + 1].classList.remove("hidden");
    }
  };

  const goToSlide = (i) => {
    setSlideIndex(i);
    dotStylingFunc(slideIndex < i ? 1 : -1);
    [...slider.current.children].forEach((x) => x.classList.add("hidden"));
    [...slider.current.children][i].classList.remove("hidden");
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "projects"]{
        name,
        url, 
        person,
        testimony,
        image{
            asset->{
                _id, 
                url
            }, 
        }
    }`
      )
      .then((data) => {
        setProject(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="projects-body section section-hidden" ref={ref}>
      <h2>NOT SURE YET?</h2>
      <h3>Our track record speaks for itself</h3>
      <p className="swipe-msg">
        Swipe through to see <i className="fa-solid fa-arrow-right-long"></i>
      </p>
      <div className="slider-btns">
        <button onClick={goToPreviousSlide}>
          <i className="fa-solid fa-circle-arrow-left"></i>
        </button>
        <button onClick={goToNextSlide}>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
      <div className="slider" ref={slider}>
        {projectData &&
          projectData.map((project, index) => {
            let slideStyle;
            slideStyle = "slide";
            return (
              <div
                className={slideStyle}
                key={index}
                aria-label={`Link to ${project.name}`}
                onClick={(e) => goToSlide(index)}
              >
                <img
                  src={project.image.asset.url}
                  alt={project.name}
                  className="slide-image"
                />
                <BlockContent
                  projectId={"kzzlqcij"}
                  dataset={"production"}
                  blocks={project.testimony}
                  className={"slide-text"}
                />
                <p>{project.person}</p>
                <a href={project.url} className="slide-link">
                  Visit the webiste
                </a>
              </div>
            );
          })}
      </div>
      <div className="dot-container" ref={dots}>
        {projectData &&
          projectData.map((project, index) => {
            let dotStyling = {
              opacity: `${index == 0 ? 0.5 : 1}`,
            };
            return (
              <div
                className="dot"
                key={index}
                onClick={(e) => {
                  goToSlide(index);
                  [...e.target.parentElement.children].forEach((x) =>
                    x.classList.remove("dot-active")
                  );
                  [...e.target.parentElement.children][
                    [...e.target.parentElement.children].indexOf(e.target)
                  ].classList.add("dot-active");
                }}
              >
                ●
              </div>
            );
          })}
      </div>
    </div>
  );
}
