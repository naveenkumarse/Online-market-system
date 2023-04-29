import React from "react";

const Trader = () => {
    const onViewProduct = () =>{
        window.location = '/trader1'
    }
    const onViewrequest = () =>{
        window.location = '/trader2'
    }
    return (
        <>
            <body>


                
      <header id="header7" class="fixed-top d-flex align-items-center">
        <div class="container7 d-flex align-items-center">

          <h1 class="logo me-auto"><a href="index.html">Trader</a></h1>

          <nav id="navbar" class="navbar">
            <ul> 
                                <button className="btn btn-primary" onClick={onViewProduct}>View products</button> <span style={{marginRight:"15px"}}>    </span>
                                <button className="btn btn-primary" onClick={onViewrequest}>View requests</button>

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header> 
                    <div style={{margin:"70px"}}>
                        <iframe style={{border:"0",width: "100%", height:"400px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                    </div>
                <section class="py-5 border-bottom" id="features">
                    <center>     <div class="container7 px-5 my-5">
                        <div class="row gx-5">
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <center /> <div class="feature bg-info bg-gradient text-white rounded-3 mb-3"><i class="bi bi-people"></i></div>
                                <h2 class="h4 fw-bolder">Trader-producer</h2>
                                <p>Many producers do not sell products or services directly to consumers and instead use marketing
                                    intermediaries to execute an assortment of necessary functions to get the product to the final user.
                                    Manufacturers use raw materials to produce finished products, which in turn may be sent directly to the retailer,
                                    or, less often, to the consumer.  </p>
                                <a class="text-decoration-none" href="#!">
                                    Details
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="feature bg-info bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                                <h2 class="h4 fw-bolder">Trader-Consumer</h2>
                                <p>Customer relationship marketing is a technique based on client relationships and customer loyalty.
                                    Using customer data and feedback, companies utilizing this marketing strategy develop long-term relationships
                                    with customers.
                                    traditional transactional marketing approach that focuses on increasing individual sale numbers. </p>
                                <a class="text-decoration-none" href="#!">

                                    Details
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div><br />
                            <div class="col-lg-4">
                                <div class="feature bg-info bg-gradient text-white rounded-3 mb-3"><i class="bi bi-globe"></i></div>

                                <h2 class="h4 fw-bolder">Trader-Exporter</h2>
                                <p>A trading  is a business that specializes in facilitating transactions between a
                                    trader and exporter. A trading house is an exporter, importer and also
                                    a trader that purchases and sells products for other businesses.export provide
                                    a service for businesses that want international trade experts to receive or deliver
                                    goods.
                                </p>
                                <a class="text-decoration-none" href="#!">
                                    Details
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>

                        </div>
                    </div></center>
                </section>



            </body>
        </>
    )
}
export default Trader;