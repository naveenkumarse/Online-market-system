import React, { useState } from "react";
import '../asserts/css/producer.css';
import { Link } from "react-router-dom";
const Producer = () => {
    const [pname, setpname] = useState("")
    const [pCategory, setpCategory] = useState("")
    const [pQuantity, setpQuantity] = useState("")
    const [pDescription, setpDescription] = useState("")
    const [pImage, setpImage] = useState("")
    const [pLocation, setpLocation] = useState("")
    const [pid,setPid] = useState(20)
    const uid = 20;
    const onPid = () =>{
        setPid(pid+1)
    }
    const onPost = async e => {
        e.preventDefault();
        onPid();
        try {
            const body = { pid, pname, pCategory, pQuantity, pDescription, pLocation, uid };
            const response = await fetch("http://localhost:5000/product", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            alert("Successfully posted")
            window.location='/producer'
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container3">
                    <a class="navbar-brand" href="#!"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <h3 style={{color:"white",marginTop:"14px"}}>Producer</h3>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                           <button className="btn btn-primary"> <Link to="/viewproducerrequest" style={{color:"white"}}>Request </Link> </button> <span style={{marginRight:"20px"}}></span> 
                           <button className="btn btn-primary"> <Link to="/" style={{color:"white"}}>Logout </Link> </button> 

                        </ul>
                    </div>
                </div>
            </nav>

            <header class="bg-dark py-3">

            <div>
            <iframe style={{ border: "0", width: "100%", height: "400px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
          </div>
            </header>

            <section class="py-5 border-bottom" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <div class="feature bg-info bg-gradient text-white rounded-3 mb-3"><i class="bi bi-people"></i></div>
                            <h2 class="h4 fw-bolder">Producer-Consumer</h2>
                            <p>Create products and services that customers want and sell them for profit.
                                As customers, we assume the consumer role, deciding whether we want to buy and/or use
                                a companys products and services.  The traditional business model pushes products and services
                                from the producer to the consumer.  In doing so, the focus is around efficiency and developing
                                relevant processes to make that push cost effective. </p>
                            <a class="text-decoration-none" href="#!">
                                Details
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <div class="feature bg-info bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                            <h2 class="h4 fw-bolder">Producer-Trader</h2>
                            <p>Producers and traders agreed on the desired product quantity and
                                quality while initiating the partnership. Besides adequate
                                quantity and quality of products demanded by traders,
                                they requested that supplies should be regular and
                                timely. Producers were requested to improve on their
                                communication with traders by calling them regularly to
                                inform them of production and supply conditions. </p>   <a class="text-decoration-none" href="#!">

                                Details
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div class="col-lg-4">
                            <div class="feature bg-info bg-gradient text-white rounded-3 mb-3"><i class="bi bi-globe"></i></div>

                            <h2 class="h4 fw-bolder">Producer- Exporter</h2>
                            <p>The exporter can demand product and the quantity through a request page.
                                The trader can accept the exporter's request by declaring how much he could supply.
                                The trader can ships the product from producer to exporter.the exporter to tell their demands directly
                                that indirectly increase the production. Export marketing offers opportunities for earning huge
                                profits and valuable foreign exchange.  </p>
                            <a class="text-decoration-none" href="#!">
                                Details
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section class=" bg-dark py-5">
                <div class="container px-3 my-5 px-5">
                    <div class="text-center mb-5">
                        <div class="feature bg-info bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                        <h2 class="text-white">Create your post</h2>
                        <p class="lead mb-0">earn through post</p>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-6">

                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                                <div class="form-floating mb-2">
                                    <input class="form-control" type="text" placeholder="Enter your name..." data-sb-validations="required" value={pname} onChange={e => setpname(e.target.value)} />
                                    <label for="name">Name</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>

                                <div class="form-floating mb-3">
                                    <input class="form-control" type="text" placeholder="Category" data-sb-validations="required" value={pCategory} onChange={e => setpCategory(e.target.value)} />
                                    <label for="email">Product Category</label>
                                    <div class="invalid-feedback" data-sb-feedback="email:required">Product Category is required.</div>

                                </div>

                                <div class="form-floating mb-3">
                                    <input class="form-control" id="phone" type="text" placeholder="(123) 456-7890" data-sb-validations="required" value={pQuantity} onChange={e => setpQuantity(e.target.value)} />
                                    <label for="phone">Quantity - price</label>
                                    <div class="invalid-feedback" data-sb-feedback="phone:required">A Quantity price is required.</div>
                                </div>
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="phone" type="text" placeholder="Location" data-sb-validations="required" value={pLocation} onChange={e => setpLocation(e.target.value)} />
                                    <label for="phone">Location</label>
                                    <div class="invalid-feedback" data-sb-feedback="phone:required">A Location is required.</div>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: "7rem" }} data-sb-validations="required" value={pDescription} onChange={e => setpDescription(e.target.value)}></textarea>
                                    <label for="message">Description</label>
                                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
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



                                {/* <!-- <div class="btn-toolbar text-center well">
                                    <button type="button" class="btn btn-primary btn-color btn-bg-color btn-sm col-xs-3 margin-left">
                                      <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>MEDIA
                                    </button>
                                    <button type="button" class="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left">
                                      <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>PIN MAP
                                    </button>
                                    <button type="button" class="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left">
                                      <span class="glyphicon glyphicon-time" aria-hidden="true"></span> ADD POST
                                    </button>
                                   
                                </div> --> */}
                                <center><div class='myDiv'>

                                    <input type="file" id="img" name="img" accept="image/*" value={pImage} onChange={e => setpImage(e.target.value)} />
                                    {/* <input type="" style={{ marginRight: "130px" }} /> */}
                                    <button class="btn btn-primary btn-sm px-4 me-sm-3 " onClick={onPost}>POST </button>
                                </div></center>
                            </form>
                        </div>
                    </div>
                </div >
            </section>





        </div >
    )
}

export default Producer;