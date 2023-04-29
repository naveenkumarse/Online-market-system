import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../asserts/css/style1.css'
import Conlist from "../components/conlist";
const Consumer = () => {
  const [products, setProducts] = useState([]);
  const getproducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/productview");
      const jsonData = await response.json();
      setProducts(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getproducts();
  }, []);

  const onNavi = () =>{
    window.location='/searchproduct';
  }
  return (

    <>

      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto"><a href="index.html">Consumer</a></h1>

          <nav id="navbar" class="navbar">
            <ul>

            <button type="button" class="btn btn-primary" onClick={onNavi}>Products</button> <span style={{marginRight:"20px"}}></span>
            <button className="btn btn-primary"> <Link to="/" style={{color:"white"}}>Logout </Link> </button> 
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>

      <main id="main">

       <div style={{marginTop:"100px"}}></div>


        <section id="blog" class="blog">
          <div class="container" data-aos="fade-up">

            <div class="row">

              <div class="col-lg-8 entries">

                <article class="entry entry-single">
                  <div>
                    <iframe style={{ border: "0", width: "100%", height: " 270px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                  </div>

                  <h2 class="entry-title">
                    <a href="blog-single.html">Walk through Maps and save your time</a>
                  </h2>

                  <div class="entry-content">
                    <p>
                      The people you see here are producers. Producers are people who make or grow goods and provide services. Sometimes they are called workers,
                      and they help us do things.<br />
                      For example, a florist is a producer who makes pretty bouquets. A baker is a producer who cooks up yummy cakes,
                      and a painter is a producer who creates artwork for us to admire.
                      <br /><br />

                      Can you name these producers? (PAUSE)<br /><br />
                      Doctors, hair stylists, landscapers, and mechanics are producers.<br />

                      When you draw a picture, or when you make cookies, you are a producer.

                      People are consumers, too. The people you see here are drinking a smoothie, shopping for groceries, and playing in a sandbox. Consumers are people who buy or use goods and services to satisfy their wants. When you eat your dinner, you will be a consumer. You’ll be hungry and eating a meal will make you feel full. You’ll be a consumer of food. You are also a consumer when you go to school. You are learning. You are consuming knowledge.



                    </p>


                    <blockquote>
                      <p>
                      Consumerism is the engine of the modern world. Consumerism is more about a man’s greed than a man’s need. 
                      </p>
                    </blockquote>

                    <p>
                      Can you name these consumers? (PAUSE)<br /><br />
                      When people buy things, use skateboards, or watch movies, they are consumers.<br /><br />

                      Now it is time for you to be a producer. Use the scissors to cut a rectangle like this one from the construction paper. Use the markers to decorate the rectangle like a bookmark—maybe like this.
                      (You can pause this video while you make your bookmark—or, keep watching if you’d like to think about it a little!)
                      Congratulations! You are a producer. You produced a bookmark. Now it is time for you to be a consumer!<br />

                      Open your book and use the bookmark to save your spot. You are using a good—a bookmark. Congratulations! You are a consumer. People are consumers and producers.


                    </p>

                  </div>

                  <div class="entry-footer">
                    <i class="bi bi-folder"></i>
                    <ul class="cats">
                      <li><a href="#">Business</a></li>
                    </ul>

                    <i class="bi bi-tags"></i>
                    <ul class="tags">
                      <li><a href="#">Creative</a></li>
                      <li><a href="#">Tips</a></li>
                      <li><a href="#">Marketing</a></li>
                    </ul>
                  </div>

                </article>


              </div>

              <div class="col-lg-4">

                <div class="sidebar">

                  <div class="sidebar-item search-form">
                  
                  </div>


                  <h3 class="sidebar-title">Recent Posts</h3>
                  <div class="sidebar-item recent-posts">
                    {products.map(product => (
                      <Conlist product={product}/>)
                    )}
                  </div>


                </div>

              </div>

            </div>

          </div>
        </section>
      </main>

      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>Sailor</h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA<br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                  <div class="social-links mt-3">
                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>

              </div>

            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
          </div>

        </div>
      </footer>

      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default Consumer;