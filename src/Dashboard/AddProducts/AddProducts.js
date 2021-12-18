import React, { useRef } from 'react';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const AddProducts = () => {
    const productRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();

    const handleAddProducts = e => {
        e.preventDefault();
        const product = productRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const image = imageRef.current.value;

        const newProduct = { product, price, description, image };

        fetch('https://vast-chamber-82381.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Successfully added a Product.')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }



    return (
        <div>
            <div className="ms-5 mb-5 me-5">
                <Dashboard></Dashboard>
                <h4 className="text-success">Give product Info</h4>
                <form onSubmit={handleAddProducts} >

                    <input type="text" placeholder="product name" ref={productRef} required className="mb-2" /><br />

                    <input type="text" placeholder="price" ref={priceRef} required className="mb-2" /><br />

                    <textarea name="" id="" cols="23" rows="3" placeholder="description" className="mb-2" ref={descriptionRef} required ></textarea><br />

                    <input type="text" placeholder="photo url" ref={imageRef} required className="mb-2" /><br />

                    <input className="btn btn-success" type="submit" value="Add product" />

                </form>
            </div>
        </div>
    );
};

export default AddProducts;