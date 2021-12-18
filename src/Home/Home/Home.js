import React from 'react';
import AboutOrganicFood from '../AboutOrganicFood/AboutOrganicFood';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Footer from '../Footer/Footer';
import HowWork from '../HowWork/HowWork';
// import Navbars from '../Navbars/Navbars';
import OurProducts from '../OurProducts/OurProducts';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';

const Home = () => {
    return (
        <div>
            {/* <Navbars></Navbars> */}
            <Banner></Banner>
            <AboutOrganicFood></AboutOrganicFood>
            <OurProducts></OurProducts>
            <HowWork></HowWork>
            <WhyChoseUs></WhyChoseUs>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;