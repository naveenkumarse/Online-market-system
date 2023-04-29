import { CDBContainer } from "cdbreact";
import React, { useEffect, useState } from "react";
import FinalView from "../components/final";

const Viewproducerrequest = () => {
    const [products, setProducts] = useState([]);
    const getproducts = async () => {

        try {
            const response = await fetch("http://localhost:5000/ourrequest1");
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
    return (
        <>
            <CDBContainer>


                <div>
                    <section class="section-50">

                        {products.map(product1 => (
                            <FinalView product={product1} />)
                        )}
                    </section>
                </div>
            </CDBContainer>
        </>
    )
}

export default Viewproducerrequest;