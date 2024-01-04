import "../App.scss";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Projects() {
  const [projectData, setProject] = useState(null);

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
      {projectData &&
        projectData.map((project, index) => {
          return (
            <div className="project" key={index}>
              <img
                className="project-img"
                src={project.image.asset.url}
                alt={project.name}
              />
            </div>
          );
        })}
    </div>
  );
}
