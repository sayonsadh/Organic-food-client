import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './ManageAllOrder.css';

const ManageAllOrder = () => {
    const [foods, setFood] = useState([]);
    const [approve, setApprove] = useState(false);

    useEffect(() => {
        fetch('https://vast-chamber-82381.herokuapp.com/selectedProducts')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [approve]);

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
                        const remainingFoods = foods.filter(food => food._id !== id)
                        setFood(remainingFoods);
                    }
                })
        }
    }
    const update = {
        status: "Shipped..."
    };
    //update...
    const handleUpdateBtn = id => {
        const uri = `https://vast-chamber-82381.herokuapp.com/selectedProducts/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Shipping successfully')
                    setApprove(!approve)
                }
            })
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <div>
                <h5 className="  font-monospace m-3 mb-2 ">Cancel or update any order.</h5>
                <hr className="w-25 mb-4 mx-auto" />
            </div>
            <div className="manageAllOrder-container mx-auto ">
                {
                    foods.map(food =>
                        <div className="border border-info    bg-info bg-opacity-10 rounded-3" key={food._id}>
                            <h5>Name:- {food.name}</h5>
                            <h5>Email:- {food.email}</h5>
                            <h6>Phone:- {food.phone}</h6>
                            <h6>Address:- {food.address}</h6>
                            <h5>status:- {food.status}</h5>
                            <button className="btn btn-danger mb-2" onClick={() => handleCancelOrder(food._id)}>Cancel Order {/* <MdCancel style={{ marginBottom: '3px' }} /> */}</button><br />
                            <button className="btn btn-danger mb-2" onClick={() => handleUpdateBtn(food._id)}>Approved  Order {/* <GiConfirmed /> */}</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageAllOrder;