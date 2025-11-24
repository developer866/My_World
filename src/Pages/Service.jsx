import React, { useState } from "react";
import "./service.css";

function Service() {
 
  const services = [
    { title: "Web Development", description: "We build responsive and modern websites for your business." },
    { title: "UI/UX Design", description: "Beautiful and user-friendly designs that boost engagement." },
    { title: "SEO Optimization", description: "Rank higher on search engines and reach more people." },
    { title: "Branding", description: "Professional brand identity and consistency across channels." },
    { title: "Maintenance", description: "We keep your website updated, fast, and secure." },
    { title: "Consultation", description: "Talk to an expert and get the right guidance." },
    { title: "Hosting Setup", description: "We help you deploy, host, and manage your website." }
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="service_container">
      <div className="aside-left">
        <h2>Services Offered</h2>
        <p>Click on a service to view its details</p>

        <div className="left_service_container">
          {services.map((service, index) => (
            <div
              key={index}
              className="service"
              onClick={() => setSelectedService(service)}
            >
              {service.title}
            </div>
          ))}
        </div>
      </div>

      <div className="content-right">
        <h2>Service Details</h2>

        <div className="glass_card">
          {selectedService ? (
            <>
              <h3>{selectedService.title}</h3>
              <p>{selectedService.description}</p>
            </>
          ) : (
            <h3 className="placeholder_text">Select a service to view details</h3>
          )}
        </div>
      </div>
    </main>
  );
}

export default Service;
