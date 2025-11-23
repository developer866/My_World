import React from "react";
import './Conact.css';
import { FaComments, FaBuilding, FaPhone } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      title: "Chat to us",
      subtitle: "Our friendly team is here to help.",
      email: "hi@untitledui.com",
      icon: <FaComments />
    },
    {
      title: "Office",
      subtitle: "Come say hello at our office HQ.",
      address: "100 Smith Street, Collingwood VIC 3066 AU",
      icon: <FaBuilding />
    },
    {
      title: "Phone",
      subtitle: "Mon-Fri from 8am to 5pm.",
      phone: "+1 (555) 000-0000",
      icon: <FaPhone />
    }
  ];

  return (
    <div className="contact-container">

      <div className="contact-info">
        <h2>Get in touch</h2>
        <p>We' love to hear from you. Our friendly team is always here to chat.</p>

        {contactInfo.map((item, index) => (
          <div key={index} className="contact-card">
            <div className="icon">{item.icon}</div>
            <div className="contact-details">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              {item.email && <p className="highlight">{item.email}</p>}
              {item.address && <p className="highlight">{item.address}</p>}
              {item.phone && <p className="highlight">{item.phone}</p>}
            </div>
          </div>
        ))}

      </div>


      <div className="contact-form">
        <form>
          <div className="name-row">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone number" />
          <textarea placeholder="Message" required></textarea>

          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
