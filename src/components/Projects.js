import "../App.scss";
import Slider from "./slider";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Projects() {
  const [projectData, setProject] = useState(null);

  let slides = [];

  const containerStyles = {
    width: "calc(100vw - 40px)",
    height: "220px",
    margin: "0 auto",
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
        console.log(projectData);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="projects-body">
      <h2>NOT SURE YET?</h2>
      <h3>Our track record speaks for itself</h3>
      {projectData &&
        projectData.map((project, index) => {
          slides.push(project.image.asset);
          if (index < 1) {
            return (
              <div style={containerStyles} key={index}>
                <Slider slides={slides} />
              </div>
            );
          }
        })}
    </div>
  );
}
