import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import CreateAdmin from '../../CreateAdmin/CreateAdmin';
import useAuth from '../../hooks/useAuth';
import AddProducts from '../AddProducts/AddProducts';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import PrivateRoute from '../../Login/AdminRoute/AdminRoute';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import './Dashboard.css';

import { AiOutlineMenuUnfold } from "react-icons/ai";

const Dashboard = () => {
    const { user, admin } = useAuth();
    return (
        <div>
            <button className=" dashboard-button btn btn-light border border-dark  bg-light text-dark bg-opacity-50 " style={{ justifyContent: 'end' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><AiOutlineMenuUnfold className='mt-1' /> CLICK HERE</button>
           

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <div className="text-start text-dark">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQBIapOi7sG90qrv25QoxZkYRxc3vG6ddKqpaACQ8HC6R-gbSX-P7kSxk-ROqvD7UgU8&usqp=CAU" alt="Girl in a jacket" className="mt-2 mb-2" width="35px" />
                        <h6 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Name:     {user.displayName}</h6>
                        <h6 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Email:     {user.email}</h6>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                   
                </div>
                <hr />
                <div className="offcanvas-body ">
                    <div className="text-start">
                        <p className="p-2 font-monospace"><Link className="text-decoration-none fw-bold fs-5" to="/home">ORGANIC FOOD  </Link> IS A TRUSTED SHOP FOR BUY 100% PURE FARM FRESH PRODUCT.</p>
                        <div className='mb-3'>
                            <Link className="text-decoration-none text-start p-2 m-5 text-dark" to="/contactus">Contacts</Link><br />

                          

                        </div>
                        
                        {user?.email &&
                            <div>
                                <p>
                                    <Link className="text-decoration-none text-start p-2 m-5 text-dark" to={`/myorders`}>  My Orders</Link>
                                </p>
                            </div>}
                        {admin &&
                            <div>
                                <p>
                                    <Link className="text-decoration-none m-5 p-2 text-dark" to={`/manageallorder`}>  Manage All Order</Link>
                                </p>

                                <p>
                                    <Link className="text-decoration-none m-5 p-2 text-dark" to={`/addproducts`}>  Add Products</Link>
                                </p>
                                <p>
                                    <Link className="text-decoration-none m-5 p-2 text-dark" to={`/manageallproducts`}>  Manage All Products</Link>
                                </p>
                                <p>
                                    <Link className="text-decoration-none m-5 p-2 text-dark" to={`/createadmin`}> Create Admin</Link>
                                </p>
                            </div>}
                        {user?.email &&
                            <div>
                                <p>
                                    <Link className="text-decoration-none m-5 p-2 text-dark" to={`/review`}>  Review</Link>
                                </p>
                            </div>}
                    </div>
                </div>
            </div>
            <Routes>

               

                <Route path={`/dashboard/manageallorder`} element={<PrivateRoute><ManageAllOrder></ManageAllOrder></PrivateRoute>} />

               

                <Route path={`/dashboard/myorders`} element={<PrivateRoute><MyOrders></MyOrders></PrivateRoute>} />


              


                <Route path={`/dashboard/addproducts`} element={<AdminRoute><AddProducts></AddProducts></AdminRoute>} />

               

                <Route path={`/dashboard/manageallproducts`} element={<AdminRoute><ManageAllProducts></ManageAllProducts></AdminRoute>} />

               

                <Route path={`/dashboard/createadmin`} element={<AdminRoute><CreateAdmin></CreateAdmin></AdminRoute>} />

               

                <Route path={`/dashboard/review`} element={<PrivateRoute><Review></Review></PrivateRoute>} />

            </Routes>
        </div>
    );
};

export default Dashboard;