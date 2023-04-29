
import React from "react";

const FinalView = (props) =>{
    const {product} = props
    return(
        <>
         <div class="container" key={product.p_id}>
                            <div class="notification-ui_dd-content">
                                <div class="notification-list notification-list--unread">
                                    <div class="notification-list_content">
                                        <div class="notification-list_img">
                                            <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
                                        </div>
                                        <div class="notification-list_detail">
                                           
                                            <p class="text-muted">{product.r_description}</p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default FinalView;