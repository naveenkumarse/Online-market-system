import React from "react";
import img4 from '../asserts/img/blog-recent-5.jpg';
const Conlist = (props) => {
    const {product} = props

    return (
        <>
            <div class="post-item clearfix" key={product.p_id}>
                <img src={img4} alt="" />
                <h4>{product.p_description}</h4>
                <time datetime="2020-01-01">{product.p_quantity}</time>
            </div>
        </>
    )
}

export default Conlist;