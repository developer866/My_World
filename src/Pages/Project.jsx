import React from 'react'
import './Project.css'

function Project() {
  return (
    <main className="project-page">
      <section className='project-aside'>
        <h4>Book service</h4>
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
        <h4>
          Project Page
        </h4>
        <div className='project-content-sub-container'>
          <div className="box">
            <img src="" alt="client image" />
            <h5>client name</h5>
            <p>clients review </p>
            <div>
              <p>before</p>
              <p>After</p>
            </div>

          </div>
          <div className="box">box2</div>
          <div className="box">boxes</div>
          <div className="box">boxes</div>
          <div className="box">boxes</div>
          <div className="box">boxes</div>
          <div className="box">boxes</div>
          <div className="box">boxes</div>
          <div className="box">boxes</div>
          <div className="box">boxes</div>
          <div className="box">boxes</div>
          <div className="box">boxes</div>
        </div>
      </section>
    </main>
  )
}

export default Project