import React from "react";
import AboutUs from "../../assets/images/about-us.jpg";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Constructions</span>
                <h1>
                  Crafting dreams with <br /> precision and excellence.
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outstanding craftsmanship and precise <br /> attention to
                  detail. With years of experience and a dedication to quality.
                </p>
                <div mt-3>
                  <a href="contact" className="btn btn-primary">
                    Contact Now
                  </a>
                  <a href="projects" className="btn btn-secondary ms-3">
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-2 py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={AboutUs} alt="About Us" className="w-100" />
              </div>
              <div className="col-md-6">
                <span>About Us</span>
                <h2>Crafting structures that last a lifetime</h2>
                <p>
                  Building enduring structures requires a comprehensive approach
                  that combines advanced materials, resilient design, routine
                  maintenance, and sustainable practices. By drawing on
                  historical insights and utilizing modern technology.
                </p>
                <p>
                  Designing structures that stand the test of time involves a
                  seamless blend of cutting-edge materials, durable design,
                  ongoing upkeep, and eco-friendly practices. By combining
                  lessons from the past with the power of modern technology.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    
    </>
  );
};

export default Home;
