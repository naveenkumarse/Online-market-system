import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
const Exportlist = (props) => {
    const { product } = props
    const onRequest = async() => {
        try {
           var request = prompt("Please convey your request message here !")
           const body = {request}
           const res = await fetch("http://localhost:5000/myrequest/", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <div class="container" key={product.p_id}>
                <div class="notification-ui_dd-content">
                    <div class="notification-list notification-list--unread">
                        <div class="notification-list_content">
                            <div class="notification-list_img">
                                <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
                            </div>
                            <div class="notification-list_detail">
                                <p><b>{product.e_name}</b> {product.e_category} </p>
                                <p class="text-muted">{product.e_description}</p>
                                <p class="text-muted"><small>{product.e_quantity}</small> <small style={{ display: "inlineBlock", marginLeft: "40px" }}>{product.e_due}</small></p>
                            </div>
                        </div>
                        <div class="Button">
                            <MDBBtn rounded onClick={onRequest}>Request</MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Exportlist;