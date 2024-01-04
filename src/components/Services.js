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
        console.log(data[0].icon);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="services-body">
      <i className="fa-solid fa-mobile-screen icon"></i>
      <h2>OUR SERVICES</h2>
      <h3>Building software to help your business grow</h3>
      {serviceData &&
        serviceData.map((service, index) => (
          <div className="service" key={index}>
            <img
              className="service-img"
              src={service.image.asset.url}
              alt={service.name}
            />
            <div className="text">
              <div className="icon-and-name">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="#ffffff" d={service.icon} />
                  </svg>
                </div>
                <h4 className="service-name">{service.name.toUpperCase()}</h4>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
