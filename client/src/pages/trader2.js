import React, { useState } from "react";
import { CDBContainer } from "cdbreact";
import '../asserts/css/searchproduct.css';
import Exportlist from "../components/exportersearch";

const Trader2 = () => {
    const [ecategory, setEcategory] = useState("");
    const [searchedexport, setSearchedexport] = useState([]);
    const onSearchExport = async (e) => {
        e.preventDefault();
        try {
            console.log(ecategory);
            const response = await fetch(`http://localhost:5000/searchexport/?ecategory=${ecategory}`);
            const parseResponse = await response.json();
            console.log(parseResponse);
            if (parseResponse.length === 0) {
                alert("No products found")
            }

            setSearchedexport(parseResponse);
        } catch (err) {
            console.error(err.message);
        }

    }


    return (
        <>
            <div className="Search-page">
                <h1>Search the Products here </h1>
            </div>

            <form class="d-flex">
                <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" value={ecategory} onChange={e => setEcategory(e.target.value)} />

                <button className="search-button-product" onClick={onSearchExport} type="submit">
                    search
                </button>
            </form>
            <div className="space">


            </div>

            <CDBContainer>
                <div>
                    <section class="section-50">
                        {searchedexport.map(product => (
                            <Exportlist product={product} />)
                        )}
                    </section>
                </div>
            </CDBContainer>
           
        </>



    )
}
export default Trader2;

