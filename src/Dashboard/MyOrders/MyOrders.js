import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://vast-chamber-82381.herokuapp.com/selectedProducts')
            .then(res => res.json())
            .then(data => {
                const selectFood = data.filter(e =>
                    e.email === user.email,
                )
                setFoods(selectFood);
            })
    }, [user])

    //cancel order
    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure you want to cancel this order?');
        if (proceed) {
            const uri = `https://vast-chamber-82381.herokuapp.com/selectedProducts/${id}`;
            fetch(uri, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Cancel successfully')
                        const remainingBikes = foods.filter(food => food._id !== id)
                        setFoods(remainingBikes);
                    }
                })
        }
    }

    return (
        <div>
            <Dashboard></Dashboard>
            <h5 className="fst-italic mt-5 p-3" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Here Is Your Order Information</h5>
            <hr className="w-50 mx-auto" />
            <div className="myOrders-container m-5 text-start">
                {
                    foods.map(food =>
                        <div style={{ marginLeft: '50px' }} className="w-100  " key={food._id}>
                            <h2 className="text-success">Congratulation</h2>
                            <h5>Name: {food?.name}</h5>
                            <h5>Email: {food?.email}</h5>
                            <h5>Phone: {food?.phone}</h5>
                            <h5>Address: {food?.address}</h5>
                            <h5>Product: {food?.product}</h5>
                            <h5>Your order: {food?.status}</h5>
                            {food?.status === "Shipped..." ?

                                <p className=" bg-light text-success fs-5 mt-4  mb-4 ">Your Order Approved by an Admin.</p>

                                : <button className="btn btn-danger bg-light text-danger mt-2 ms-3 mb-2 " onClick={() => handleCancelOrder(food._id)}>Cancel Order {/* <MdCancel style={{ marginBottom: '3px' }} /> */}
                                </button>
                            }
                            <hr />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;