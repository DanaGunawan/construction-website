import React from "react";
import AboutUs from "../../assets/images/about-us.jpg";
import serviceImg from "../../assets/images/construction1.jpg";
import projectsImg from "../../assets/images/construction3.jpg";
import BlogsImg from "../../assets/images/construction2.jpg";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import testiImg1 from "../../assets/images/author-2.jpg";
// Import Swiper React components

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

        {/* OUR Services */}
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>our services</span>
              <h2>Our construction services</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>

            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-img">
                    <img src={serviceImg} className="" alt="" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        construction industry that focuses on projects requiring
                        specialized skills, materials, and techniques.
                      </p>
                      <button className="btn btn-sm btn-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-img">
                    <img src={serviceImg} className="" alt="" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        construction industry that focuses on projects requiring
                        specialized skills, materials, and techniques.
                      </p>
                      <button className="btn btn-sm btn-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-img">
                    <img src={serviceImg} className="" alt="" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        construction industry that focuses on projects requiring
                        specialized skills, materials, and techniques.
                      </p>
                      <button className="btn btn-sm btn-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-img">
                    <img src={serviceImg} className="" alt="" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        construction industry that focuses on projects requiring
                        specialized skills, materials, and techniques.
                      </p>
                      <button className="btn btn-sm btn-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* whychoose us */}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>
                Created in close partnership with our clients and collaborators,
                this approach merges industry expertise,
                <br /> decades of experience, innovation, and flexibility to
                consistently deliver excellence.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card border-0 shadow p-4">
                  <div className="card-icon">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="card-title mt-4">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow p-4">
                  <div className="card-icon">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="card-title mt-4">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow p-4">
                  <div className="card-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="card-title mt-4">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR Projects */}
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>our Projects</span>
              <h2>Discover our diverse range of projects</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>

            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-img">
                    <img src={projectsImg} className="" alt="" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Bali Projects</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        construction industry that focuses on projects requiring
                        specialized skills, materials, and techniques.
                      </p>
                      <button className="btn btn-sm btn-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-img">
                    <img src={projectsImg} className="" alt="" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Bali Projects</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        construction industry that focuses on projects requiring
                        specialized skills, materials, and techniques.
                      </p>
                      <button className="btn btn-sm btn-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-img">
                    <img src={projectsImg} className="" alt="" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Bali Projects</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        construction industry that focuses on projects requiring
                        specialized skills, materials, and techniques.
                      </p>
                      <button className="btn btn-sm btn-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-img">
                    <img src={projectsImg} className="" alt="" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Bali Projects</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Specialty construction is a niche sector within the
                        construction industry that focuses on projects requiring
                        specialized skills, materials, and techniques.
                      </p>
                      <button className="btn btn-sm btn-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-5 py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <span>Testimonials</span>
              <h2 className="fw-bold">
                Discover our diverse range of projects
              </h2>
              <p className="text-muted">
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 }, // Mobile
                768: { slidesPerView: 2 }, // Tablet
                1024: { slidesPerView: 3 }, // Desktop
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {/* ==== TESTIMONIAL ITEM ==== */}
              <SwiperSlide>
                <div className="card border-0 shadow px-3 h-100">
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        ))}
                      </div>
                      <p className="pt-4 pb-3 text-muted">
                        Selama lebih dari empat dekade, kami telah dipercaya
                        menangani berbagai proyek konstruksi mulai dari hunian,
                        komersial, hingga industri berskala besar. Komitmen kami
                        tidak hanya pada hasil akhir yang berkualitas, tetapi
                        juga pada pengalaman positif klien.
                      </p>
                    </div>
                    <div>
                      <hr />
                      <div className="d-flex align-items-center">
                        <img
                          src={testiImg1}
                          alt="client"
                          className="rounded-circle"
                          width="50"
                          height="50"
                        />
                        <div className="ps-3">
                          <div className="fw-bold">DanaGunawan</div>
                          <div className="text-muted small">Creator</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card border-0 shadow px-3 h-100">
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        ))}
                      </div>
                      <p className="pt-4 pb-3 text-muted">
                        Selama lebih dari empat dekade, kami telah dipercaya
                        menangani berbagai proyek konstruksi mulai dari hunian,
                        komersial, hingga industri berskala besar. Komitmen kami
                        tidak hanya pada hasil akhir yang berkualitas, tetapi
                        juga pada pengalaman positif klien.
                      </p>
                    </div>
                    <div>
                      <hr />
                      <div className="d-flex align-items-center">
                        <img
                          src={testiImg1}
                          alt="client"
                          className="rounded-circle"
                          width="50"
                          height="50"
                        />
                        <div className="ps-3">
                          <div className="fw-bold">DanaGunawan</div>
                          <div className="text-muted small">Creator</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card border-0 shadow px-3 h-100">
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        ))}
                      </div>
                      <p className="pt-4 pb-3 text-muted">
                        Selama lebih dari empat dekade, kami telah dipercaya
                        menangani berbagai proyek konstruksi mulai dari hunian,
                        komersial, hingga industri berskala besar. Komitmen kami
                        tidak hanya pada hasil akhir yang berkualitas, tetapi
                        juga pada pengalaman positif klien.
                      </p>
                    </div>
                    <div>
                      <hr />
                      <div className="d-flex align-items-center">
                        <img
                          src={testiImg1}
                          alt="client"
                          className="rounded-circle"
                          width="50"
                          height="50"
                        />
                        <div className="ps-3">
                          <div className="fw-bold">DanaGunawan</div>
                          <div className="text-muted small">Creator</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card border-0 shadow px-3 h-100">
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        ))}
                      </div>
                      <p className="pt-4 pb-3 text-muted">
                        Selama lebih dari empat dekade, kami telah dipercaya
                        menangani berbagai proyek konstruksi mulai dari hunian,
                        komersial, hingga industri berskala besar. Komitmen kami
                        tidak hanya pada hasil akhir yang berkualitas, tetapi
                        juga pada pengalaman positif klien.
                      </p>
                    </div>
                    <div>
                      <hr />
                      <div className="d-flex align-items-center">
                        <img
                          src={testiImg1}
                          alt="client"
                          className="rounded-circle"
                          width="50"
                          height="50"
                        />
                        <div className="ps-3">
                          <div className="fw-bold">DanaGunawan</div>
                          <div className="text-muted small">Creator</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* duplikat <SwiperSlide> lain di sini */}
            </Swiper>
          </div>
        </section>

        <section className="section-6 py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <span>Blog & News</span>
              <h2 className="fw-bold">Articles & blog posts</h2>
              <p className="text-muted">
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow border-0 ">
                  <div className="card-img-top">
                    <img src={BlogsImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body px-4">
                      <div className="mb-3"><a href="" className="">Dummy Blog</a></div>
                      <a href="#" className="btn btn-primary small-btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
