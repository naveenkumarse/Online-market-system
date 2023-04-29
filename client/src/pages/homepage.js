import React from "react";
import { Link } from "react-router-dom";
import LogoImg from '../asserts/img/logo.png';
import '../asserts/css/style.css';
import HeroImg from '../asserts/img/hero-img.png';
import About from '../asserts/img/about.jpg';
import Values1 from '../asserts/img/values-1.png';
import Values2 from '../asserts/img/values-2.png';
import Values3 from '../asserts/img/values-3.png';
import Logo from '../asserts/img/logo.png'
import Features from '../asserts/img/features.png'
const Home1 = () => {
  return (
    <>
      <header id="header" class="header fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src={LogoImg} alt="" />
            <span>MapStart</span>
          </a>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#footer">Contact</a></li>
              <li class="nav-link scrollto"> <Link to="/login">Sign in</Link></li>
              <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </header>
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">We are providing a website for the replacement of market</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i class="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={HeroImg} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div class="content">
                  <h3>Who We Are</h3>
                  <h2>We provide a online marketing and trading platform for all social classes</h2>
                  <p>
                    Online market system is a system that allows the user to ask their requirements, post their products and trade the products.
                    This system will help in fulfilling the demands and also helps in the growth production.
                    It acts like a real-world market where the producer can sell goods, consumer can buy goods, trader can trade goods to the exporter.
                  </p>
                  <div class="text-center text-lg-start">
                    <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>View map</span>
                      <i class="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <img src={About} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="values" class="values">
          <div class="container" data-aos="fade-up">
            <header class="section-header">
              <h2>Our Values</h2>
              <p>Get your benefit using!!</p>
            </header>
            <div class="row">
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="box">
                  <img src={Values1} class="img-fluid" alt="" />
                  <h3>Quality market to the user</h3>
                  <p>This platform helps the user in selling and buying goods.
                    There will be a no actual products ordering and order completion, however the system will make
                    the information public which helps people in taking decisions.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div class="box">
                  <img src={Values2} class="img-fluid" alt="" />
                  <h3>Book your products easily</h3>
                  <p> System does not have payment capabilities but the users can book the products and the further process is completed with their own risk.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                <div class="box">
                  <img src={Values3} class="img-fluid" alt="" />
                  <h3>Save time together</h3>
                  <p>It saves the time for all the producers,consumers,traders,exporters.
                    This is applicable to all social classes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" class="features">
          <div class="container" data-aos="fade-up">
            <header class="section-header">
              <h2>Features</h2>
              <p>Benefit our Features</p>
            </header>
            <div class="row">
              <div class="col-lg-6">
                <img src={Features} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div class="row align-self-center gy-4">
                  <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check" />
                      <h3>Usabiity</h3>
                    </div>
                  </div>
                  <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check" />
                      <h3>Accuracy</h3>
                    </div>
                  </div>
                  <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check" />
                      <h3>Availability</h3>
                    </div>
                  </div>
                  <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check" />
                      <h3>Maintainability</h3>
                    </div>
                  </div>
                  <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check" />
                      <h3>Time saving</h3>
                    </div>
                  </div>
                  <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check" />
                      <h3>Portability</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="services">
          <div class="container" data-aos="fade-up">
            <header class="section-header">
              <h2>Services</h2>
              <p>Join our platform by servicing</p>
            </header>
            <div class="row gy-4">
              <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="service-box blue">
                  <i class="ri-discuss-line icon" />
                  <h3>Producer</h3>
                  <p>The one who produces the product and post the product details in the system.
                    He can add, remove, update the product details.
                  </p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right" /></a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="service-box green">
                  <i class="ri-discuss-line icon" />
                  <h3>Consumer</h3>
                  <p>The one who buys the product from the market and book the products through the system.
                    He can search, book and cancel the products.</p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right" /></a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="700">
                <div class="service-box orange">
                  <i class="ri-discuss-line icon" />
                  <h3>Trader</h3>
                  <p>The one who ships the product from the customer to the exporter or customer through the system.He can book and cancel shipments.
                  </p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right" /></a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div class="service-box red">
                  <i class="ri-discuss-line icon" />
                  <h3>Exporter</h3>
                  <p>The one who can demand the products to the market.He can request, modify and remove the product. </p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-5 col-md-12 footer-info">
                <a href="index.html" class="logo d-flex align-items-center">
                  <img src={Logo} alt="" />
                  <span>MapStart</span>
                </a>
                <p>Many producers do not sell products or services directly to consumers and instead use marketing
                                    intermediaries to execute an assortment of necessary functions to get the product to the final user.
                                     </p>
               
              </div>
              <div class="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i class="bi bi-chevron-right" /> <a href="#">Home</a></li>
                  <li><i class="bi bi-chevron-right" /> <a href="#">About us</a></li>
                  <li><i class="bi bi-chevron-right" /> <a href="#">Services</a></li>
                  <li><i class="bi bi-chevron-right" /> <a href="#">Terms of service</a></li>
                  <li><i class="bi bi-chevron-right" /> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div class="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i class="bi bi-chevron-right" /> <a href="#">Web Design</a></li>
                  <li><i class="bi bi-chevron-right" /> <a href="#">Web Development</a></li>
                  <li><i class="bi bi-chevron-right" /> <a href="#">Product Management</a></li>
                  <li><i class="bi bi-chevron-right" /> <a href="#">Marketing</a></li>
                  <li><i class="bi bi-chevron-right" /> <a href="#">Graphic Design</a></li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>MapStart</span></strong>. All Rights Reserved
          </div>

        </div>
      </footer>


    </>
  )
}
export default Home1;