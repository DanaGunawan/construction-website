import React from 'react'


const Footer = () => {
  return (
    <div>
        <footer>
        <div className="container pt-5 pb-3">
          <div className="row">
            <div className="col-md-3">
              <h3>UrbanEdge Constructions</h3>
              <div className="pe-3">
               <p>
                Our post-construction services gives you peace of mind knowing
                that we are still here for you even after.
              </p>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Our Projects</h3>
              <ul>
                <li><a href="">Urban Construction</a></li>
                <li><a href="">Urban Construction</a></li>
                <li><a href="">Urban Construction</a></li>
                <li><a href="">Urban Construction</a></li>
                
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="mb-3" >Quick Links</h3>
              <ul>
                <li><a href="AboutUs">About Us</a></li>
                <li><a href="Services">Services</a></li>
                <li><a href="Projects">Projects</a></li>
                <li><a href="Blogs">Blogs</a></li>
                <li><a href="Contact Us">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="mb-3">Contact Us</h3>
              <ul>
                <li><a href="">+6281529097310</a></li>
                <li><a href="">dewakadekdana@gmail.com </a></li>
                <p>Jimbaran,Kuta Selatan, Badung, Bali</p>
              </ul>
            </div>
          </div>
          <hr className="text-white"/>
          <div className="text-center pt-4">
            <p>&copy; Created By DanaGunawan, For Learning</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
