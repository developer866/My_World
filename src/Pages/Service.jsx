import React from 'react'
import "./service.css"

function Service() {
  return (
    <main className='service_container'>

        <div className='aside-left'>
          Services offered
          <p>We offer the following service with ease</p>
          <div className='left_service_container'>
            <div className="service">hello</div>
            <div className="service">hello</div>
            <div className="service">hello</div>
            <div className="service">hello</div>
            <div className="service">hello</div>
            <div className="service">hello</div>
            <div className="service">hello</div>
          </div>
        </div>
        <div className='content-right'>
          Services offered 
          {/* glass morphorism that will show individaul service details */}
          <div className='glass_card'>

          </div>
        </div>
  
    </main>
  )
}

export default Service