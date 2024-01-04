import "../App.scss";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Services() {
  const [serviceData, setService] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "services"]{
        name,
        icon,
        viewBox,
        description,
        image{
            asset->{
                _id, 
                url
            }, 
        }
    }`
      )
      .then((data) => {
        setService(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="services-body">
      <h2>OUR SERVICES</h2>
      <h3>Building software to help your business grow</h3>
      {serviceData &&
        serviceData.map((service, index) => {
          let rowClass;
          if (index % 2 != 0) {
            rowClass = "text row-reverse";
          } else {
            rowClass = "text";
          }
          return (
            <div className="service" key={index}>
              <img
                className="service-img"
                src={service.image.asset.url}
                alt={service.name}
              />
              <div className={rowClass}>
                <div className="icon-and-name">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox={service.viewBox}
                    >
                      <path fill="#ffffff" d={service.icon} />
                    </svg>
                  </div>
                  <h4 className="service-name">{service.name.toUpperCase()}</h4>
                </div>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
