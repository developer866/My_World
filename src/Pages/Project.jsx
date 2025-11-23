import { useState } from 'react'
import './Project.css'
import { motion, AnimatePresence } from "framer-motion";


function Project() {
  const clients = [
    {
      id: 1,
      img: "/Astro-bg.png",
      name: "Client Alpha",
      review: "Excellent communication and delivery.",
      description: "A responsive portfolio website for showcasing projects.",
      price: "$1200",
      techStack: ["React", "Node.js", "CSS"]
    },
    {
      id: 2,
      img: "/Astro-bg.png",
      name: "Client Beta",
      review: "Fast delivery, very professional.",
      description: "E-commerce platform for a retail store.",
      price: "$2500",
      techStack: ["React", "Express", "MongoDB"]
    },
    {
      id: 3,
      img: "/Astro-bg.png",
      name: "Client Gamma",
      review: "Creative and reliable.",
      description: "Landing page for a marketing campaign.",
      price: "$800",
      techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 4,
      img: "/Astro-bg.png",
      name: "Client Delta",
      review: "Delivered on time with high quality.",
      description: "Mobile responsive blog platform.",
      price: "$1000",
      techStack: ["React", "Firebase", "Tailwind CSS"]
    },
    {
      id: 5,
      img: "/Astro-bg.png",
      name: "Client Epsilon",
      review: "Very professional and responsive.",
      description: "Online booking system for small business.",
      price: "$1500",
      techStack: ["React", "Node.js", "MySQL"]
    },
    {
      id: 6,
      img: "/Astro-bg.png",
      name: "Client Zeta",
      review: "Great design and functionality.",
      description: "Portfolio and resume showcase site.",
      price: "$900",
      techStack: ["Next.js", "CSS", "Framer Motion"]
    },
    {
      id: 7,
      img: "/Astro-bg.png",
      name: "Client Eta",
      review: "Very creative and professional.",
      description: "Corporate website for a consultancy firm.",
      price: "$2000",
      techStack: ["React", "Node.js", "Bootstrap"]
    },
    {
      id: 8,
      img: "/Astro-bg.png",
      name: "Client Theta",
      review: "Excellent work and support.",
      description: "Event management platform with ticketing.",
      price: "$3000",
      techStack: ["React", "Express", "MongoDB"]
    }
  ];


  const [selectedProject, setSelectedProject] = useState(null);



  return (
    <main className="project-page">


      <section className='project-aside'>
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div
              key="empty"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              <h2>Project details</h2>
              <p>Select a project to view details</p>
            </motion.div>
          ) : (
            <motion.div
              key={selectedProject.id} // important for AnimatePresence to detect changes
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              <p><span>Client:</span> {selectedProject.name}</p>
              <p><span>Review:</span> {selectedProject.review}</p>
              <p><span>Description:</span> {selectedProject.description}</p>
              <p><span>Price:</span> {selectedProject.price}</p>
              <p><span>Tech Stack:</span> {selectedProject.techStack.join(", ")}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className='project-content'>
        <h2>
          Project Page
        </h2>
        <div className='project-content-sub-container'>

          {clients.map(client => (
            <div className="box" key={client.id} onClick={() => setSelectedProject(client)}>
              <div>

                <motion.img
                  src={client.img}
                  alt="client image"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <h5>{client.name}</h5>
                {/* <p>{client.review}</p> */}
                <p>{client.description}</p>
                <p>{client.techStack+ " "}</p>
                <p>{client.price}</p>
              </div>

              <div className="navigation">
                <p className="nav-button">Preview</p>
                <p className="nav-button">github</p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </main>
  )
}

export default Project