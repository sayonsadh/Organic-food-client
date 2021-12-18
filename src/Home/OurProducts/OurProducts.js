import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import OurProduct from '../Home/OurProduct/OurProduct';
import './OurProducts.css';

const OurProducts = () => {
    const [ourProducts, setOurProducts] = useState([]);

    useEffect(() => {
        fetch('https://vast-chamber-82381.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setOurProducts(data.splice(0, 6)))
    }, [])
    return (
        <div>
            <h3 className=" text-dark mt-4 mx-auto  ">SOME PRODUCTS</h3>
            <p >For more Products, please visit our Explore page.</p>
            {!ourProducts.length ? <Spinner animation="grow" variant="primary" /> : <> <div className="products-container">
                {
                    ourProducts.map(product => <OurProduct
                        key={product._id}
                        productsInfo={product}
                    ></OurProduct>)
                }
            </div></>}
        </div>
    );
};

export default OurProducts;