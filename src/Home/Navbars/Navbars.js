import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbars = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" className="sticky-top" variant="light" >
                <Container>
                    <Navbar.Brand href="#home">ORGANIC FOODS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>


                            <Link className="text-decoration-none text-start p-2 text-dark" to="/home">Home</Link>


                            <Link className="text-decoration-none text-start p-2 text-dark" to="/dashboard">Dashboard</Link>











                            <Link className="text-decoration-none text-start p-2  text-dark" to="/explores">Explores</Link>



                            {user?.email && <p className="mt-2 ms-2">signed in as: {user?.displayName}</p>}

                            {user?.email ?
                                <Button onClick={logout} className="btn-danger  bg-danger bg-opacity-50 ms-2 mb-2">Logout </Button>
                                :
                                <div className='mt-2'>
                                    <Link className="text-decoration-none text-start p-2 text-dark" to="/login">Log in</Link>

                                    <Link className="text-decoration-none text-start p-2 text-dark" to="/signup">Sign UP</Link>
                                </div>
                            }





                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;