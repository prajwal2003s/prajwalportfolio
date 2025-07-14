import { useState } from "react"
import "./Contact.css";
import personaldata from "./personal.json";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactData = personaldata.contact;

  return (
    <section id={contactData.section.id} className="contact">
      <div className="container">
        <div className="section-header">
          <h2>{contactData.section.title}</h2>
          <p>{contactData.section.subtitle}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card card">
              <h3>{contactData.card.title}</h3>
              <p>{contactData.card.message}</p>

              <div className="contact-methods">
                {contactData.card.methods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                  >
                    <i className={method.icon}></i>
                    <span>{method.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} className="card">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
