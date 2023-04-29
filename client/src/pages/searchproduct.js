import { CDBContainer } from "cdbreact";
import React, { useState } from "react";
import '../asserts/css/searchproduct.css';
import Notification from "../components/notification";
const SearchProduct = () => {
    const [scategory,setScategory] = useState("");
    const [searchedproduct,setSearchedproduct] = useState([]);
    const onSearchProduct = async (e) =>{
        e.preventDefault(); 
        try {
            const response = await fetch(`http://localhost:5000/searchproduct/?scategory=${scategory}`);
            const parseResponse = await response.json();
            console.log(parseResponse);
            if(parseResponse.length === 0){
                alert("No products found")
            }
            setSearchedproduct(parseResponse);
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
                <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" value={scategory}   onChange={e => setScategory(e.target.value)}/>
                <button className="search-button-product" onClick={onSearchProduct} type="submit">
                    search 
                </button>
            </form>
            <div className="space">
            </div>
            <CDBContainer>
                <div>
                    <section class="section-50">
                        {searchedproduct.map(product => (
                            <Notification product={product} />)
                        )}
                    </section>
                </div>
            </CDBContainer>
        </>
    )
}

export default SearchProduct;