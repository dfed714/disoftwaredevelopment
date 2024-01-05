import "../App.scss";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect, useRef } from "react";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Projects() {
  const [projectData, setProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const slider = useRef();
  const dots = useRef();

  if (slider.current) {
    slider.current.style.transform = `translateX(calc(${slideIndex * -100}%`;
  }

  const dotStylingFunc = () => {
    if (dots.current) {
      [...dots.current.children].forEach((x) =>
        x.classList.remove("dot-active")
      );
      [...dots.current.children][slideIndex].classList.add("dot-active");
    }
  };

  const goToPreviousSlide = () => {
    if (slideIndex > 0) {
      dotStylingFunc();
      setSlideIndex(slideIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (slideIndex < slider.current.children.length - 1) {
      dotStylingFunc();
      setSlideIndex(slideIndex + 1);
    }
  };

  const goToSlide = (i) => {
    setSlideIndex(i);
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "projects"]{
        name,
        url, 
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
    <div className="projects-body">
      <h2>NOT SURE YET?</h2>
      <h3>Our track record speaks for itself</h3>
      <p>
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
            return (
              <img
                key={index}
                src={project.image.asset.url}
                alt="Project"
                className="slide"
              />
            );
          })}
      </div>
      <div className="dot-container" ref={dots}>
        {projectData &&
          projectData.map((project, index) => (
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
          ))}
      </div>
    </div>
  );
}
