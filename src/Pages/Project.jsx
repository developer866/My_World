import { useState } from 'react'
import './Project.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Project() {
  const [value, setValue] = useState(new Date());
  console.log(value);
  return (
    <main className="project-page">
      <section className='project-aside'>
        <h4>Book service</h4>
          <div className='calender'>
            <Calendar onChange={setValue} value={value} />
          </div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            < input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
        </form>
      </section>
      <section className='project-content'>
        <h2>
          Project Page
        </h2>
        <div className='project-content-sub-container'>
          <div className="box">
            <img src="/Astro-bg.png" alt="client image" />
            <h5>client name</h5>
            <p>clients review </p>
            <div className="navigation">
              <p className="nav-button" >Prev</p>
              <p className="nav-button" >Next</p>
            </div>
          </div>

          <div className="box">
            <img src="/Astro-bg.png" alt="client image" />
            <h5>client name</h5>
            <p>clients review </p>
            <div className="navigation">
              <p className="nav-button" >Prev</p>
              <p className="nav-button" >Next</p>
            </div>
          </div>

          <div className="box">
            <img src="/Astro-bg.png" alt="client image" />
            <h5>client name</h5>
            <p>clients review </p>
            <div className="navigation">
              <p className="nav-button" >Prev</p>
              <p className="nav-button" >Next</p>
            </div>
          </div>

          <div className="box">
            <img src="/Astro-bg.png" alt="client image" />
            <h5>client name</h5>
            <p>clients review </p>
            <div className="navigation">
              <p className="nav-button" >Prev</p>
              <p className="nav-button" >Next</p>
            </div>
          </div>

          <div className="box">
            <img src="/Astro-bg.png" alt="client image" />
            <h5>client name</h5>
            <p>clients review </p>
            <div className="navigation">
              <p className="nav-button" >Prev</p>
              <p className="nav-button" >Next</p>
            </div>
          </div>

          <div className="box">
            <img src="/Astro-bg.png" alt="client image" />
            <h5>client name</h5>
            <p>clients review </p>
            <div className="navigation">
              <p className="nav-button" >Prev</p>
              <p className="nav-button" >Next</p>
            </div>
          </div>

          <div className="box">
            <img src="/Astro-bg.png" alt="client image" />
            <h5>client name</h5>
            <p>clients review </p>
            <div className="navigation">
              <p className="nav-button" >Prev</p>
              <p className="nav-button" >Next</p>
            </div>
          </div>

          <div className="box">
            <img src="/Astro-bg.png" alt="client image" />
            <h5>client name</h5>
            <p>clients review </p>
            <div className="navigation">
              <p className="nav-button" >Prev</p>
              <p className="nav-button" >Next</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Project