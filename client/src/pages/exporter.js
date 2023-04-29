import React, { useState } from "react";
import img1 from '../asserts/img/features.png';
import img2 from '../asserts/img/features-2.png';
import img3 from '../asserts/img/features-3.png';
import { Link } from "react-router-dom";
// import '../asserts/css/style1.css';
const Exporter = () => {

  const [eid, setEid] = useState(20)
  const [ename, setEname] = useState("")
  const [ecategory, setEcategory] = useState("")
  const [edue, setEdue] = useState("")
  const [equantity, setEquantity] = useState("")
  const [edescription, setEdescription] = useState("")
  const onIncrease = () => {
    setEid(eid + 1)
  }
  const onExporterpost = async e => {
    onIncrease();
    e.preventDefault();
    try {
      const body = { eid, ename, ecategory, edue, equantity, edescription };
      console.log(body);
      const response = await fetch("http://localhost:5000/exporterpost", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      alert("Successfully posted");
      window.location = "/exporter"
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto"><a href="index.html">Exporter</a></h1>

          <nav id="navbar" class="navbar">
            <ul>
              <button type="button" class="btn btn-primary" > <Link to="/viewexporterrequest" style={{ color: "white" }}>Request</Link></button> <span style={{ marginRight: "20px" }}></span>
              <button className="btn btn-primary"> <Link to="/" style={{ color: "white" }}>Logout </Link> </button>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>

      <main id="main">



        <div style={{ marginTop: "100px" }}></div>
        <header class="bg-light py-">
          <div>
            <iframe style={{ border: "0", width: "100%", height: "400px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
          </div>

        </header>

        <section id="features" class="features">
          <div class="container">

            <div class="section-title">
              <h2>Features</h2>
              <p>Check our Features</p>
            </div>

            <div class="row">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Exporter post</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Exporter's request</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Trader's request</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Product collection</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>What Exporter can do!</h3>
                        <p class="fst-italic">Exporter can post the Product they want as a request !</p>
                        <p> The product can be of anytype. For example, if the exporter wants 20tons of tomato within this week, he can request the post in the product as a post given below by entering the details in the form given below.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={img1} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Exporters save your build results to a specified output type. </h3>
                        <p class="fst-italic">Most common use cases doesn’t require you don’t need to specify which exporter to use explicitly.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={img2} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>To send or transport (a commodity, for example) abroad, especially for trade or sale.</h3>
                        <p class="fst-italic">Many producers do not sell products or services directly to consumers and instead use marketing
                                    intermediaries to execute an assortment of necessary functions to get the product to the final user.</p>
                        <p></p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={img3} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>To send or transport (a commodity, for example) abroad, especially for trade or sale.</h3>
                        <p class="fst-italic">Many producers do not sell products or services directly to consumers and instead use marketing
                                    intermediaries to execute an assortment of necessary functions to get the product to the final user.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        {/* <img src={img4} alt="" class="img-fluid" /> */}
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>

          </div>
        </section>

        <section class=" bg-dark py-5">
          <div class="container px-3 my-5 px-5">
            <div class="text-center mb-5">
              {/* <div class="feature bg-info bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div> */}
              <h2 class="text-white">Create your post</h2>
              <p class="lead mb-0">earn through post</p>
            </div>
            <div class="row gx-5 justify-content-center">
              <div class="col-lg-6">

                <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                  <div class="form-floating mb-2">
                    <input class="form-control" type="text" placeholder="Enter your name..." data-sb-validations="required" value={ename} onChange={e => setEname(e.target.value)} />
                    <label for="name">Product Name</label>
                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>

                  <div class="form-floating mb-3">
                    <input class="form-control" type="text" placeholder="Category" data-sb-validations="required" required value={ecategory} onChange={e => setEcategory(e.target.value)} />
                    <label for="email">Product Category</label>
                    <div class="invalid-feedback" data-sb-feedback="email:required">Product Category is required.</div>

                  </div>

                  <div class="form-floating mb-3">
                    <input class="form-control" placeholder="Product Quantity" data-sb-validations="required" value={equantity} onChange={e => setEquantity(e.target.value)} />
                    <label for="email">Product quantity</label>
                    <div class="invalid-feedback" data-sb-feedback="email:required">Product Category is required.</div>

                  </div>
                  <div class="form-floating mb-3">
                    <input class="form-control" placeholder="Time period" data-sb-validations="required" value={edue} onChange={e => setEdue(e.target.value)} />
                    <label for="email">Product due</label>
                    <div class="invalid-feedback" data-sb-feedback="email:required">Product Category is required.</div>

                  </div>
                  <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Product Description" style={{ height: "7rem" }} data-sb-validations="required" value={edescription} onChange={e => setEdescription(e.target.value)}></textarea>
                    <label for="email">Product description</label>
                    <div class="invalid-feedback" data-sb-feedback="email:required">Product Category is required.</div>

                  </div>


                  <div class="d-none" id="submitSuccessMessage">
                    <div class="text-center mb-3">
                      <div class="fw-bolder">Form submission successful!</div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                  </div>

                  <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>




                  <center><div class='myDiv'>


                    <button class="btn btn-primary btn-sm px-4 me-sm-3 " onClick={onExporterpost}>POST </button>
                  </div></center>
                </form>
              </div>
            </div>
          </div >
        </section>


      </main>

      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>Exporter</h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA<br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                  <div class="social-links mt-3">
                    
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

              {/* <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
              </div> */}

              <div class="col-lg-4 col-md-6 footer-newsletter" style={{marginRight:"20px"}}> 
                <h4>Our Newsletter</h4>
                <p>If there any query contact as through this newsletter</p>

                <input type="email" name="email" /><input type="submit" value="Subscribe" />



              </div>

            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Exporter</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Exporter;