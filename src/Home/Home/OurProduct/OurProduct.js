import React from 'react';
import { Link } from 'react-router-dom';

const OurProduct = ({productsInfo}) => {
    const {product, price, description, image} = productsInfo;
    return (
        <div>
            <img className="" width="330px" height="230px" src={image} alt="" />
                <h3>{product}</h3>
                <p className="text-center">{description}</p>
                <h4>Price:- ${price}</h4>
                <Link to={`/booking/${product}`}><button className="btn  btn-success">Buy {product} </button></Link>
        </div>
    );
};

export default OurProduct;