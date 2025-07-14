import React from "react";
import "./About.css";
import personaldata from "./personal.json";
const About = () => {
  const data = personaldata.section;

  return (
    <section id={data.id} className="about">
      <div className="container">
        <div className="section-header">
          <h2>{data.header.title}</h2>
          <p>{data.header.subtitle}</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src={data.image.src}
              height={data.image.height}
              width={data.image.width}
              alt={data.image.alt}
            />
          </div>

          <div className="about-text">
            {data.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="contact-info">
              {data.contact.map((item, index) => (
                <div className="contact-item" key={index}>
                  <i className={item.icon}></i>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default About;