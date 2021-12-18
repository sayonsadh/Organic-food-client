import './App.css';
import Home from './Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ContactUs } from './ContactUs/ContactUs';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import Explores from './Home/Explores/Explores';
import Login from './Login/Login/Login';
import SignUp from './Login/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import CreateAdmin from './CreateAdmin/CreateAdmin';
import Review from './Dashboard/Review/Review';
import Booking from './Dashboard/Booking/Booking';
import Navbars from './Home/Navbars/Navbars';
import MyOrders from './Dashboard/MyOrders/MyOrders';
import ManageAllOrder from './Dashboard/ManageAllOrder/ManageAllOrder';
import ManageAllProducts from './Dashboard/ManageAllProducts/ManageAllProducts';
import AddProducts from './Dashboard/AddProducts/AddProducts';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
     <AuthProvider>
     <BrowserRouter>
     <Navbars></Navbars>
        <Routes>
          {/* <Route path="/" element={<App />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explores" element={ <PrivateRoute><Explores /></PrivateRoute>} />

            <Route path="/contactus" element={<PrivateRoute><ContactUs /></PrivateRoute>} />

            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

            <Route path="/myorders" element={<MyOrders />} />

            <Route path="/addproducts" element={<AddProducts />} />

            <Route path="/manageallorder" element={<ManageAllOrder />} />

            <Route path="/manageallproducts" element={<ManageAllProducts />} />

            <Route path="/createadmin" element={<CreateAdmin />} />

            <Route path={`/booking/:product`}  element={<PrivateRoute><Booking /></PrivateRoute>} />

            <Route path="/review" element={<PrivateRoute><Review /></PrivateRoute>} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<SignUp />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
