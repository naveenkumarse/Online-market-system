import '../asserts/css/viewpost.css';
import React, { useEffect, useState } from "react";
import Notification from '../components/notification';
import { CDBContainer } from 'cdbreact';
function ViewPost() {
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

    return (
        <>
            
            {/* <form class="d-flex">
                <input class="border border-3 border-top-0 border-start-0 border-end-0" type="search" placeholder="Search" aria-label="Search" style=" outline: none;" />
                <button class="btn btn-primary" type="submit">Search </button>
            </form> */}

            <CDBContainer>


                <div>
                    <section class="section-50">

                        {products.map(product => (
                            <Notification product={product} />)
                        )}
                    </section>
                </div>
            </CDBContainer>
        </>
    )
}
export default ViewPost;