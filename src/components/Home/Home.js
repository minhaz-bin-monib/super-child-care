import React from 'react';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import SisterCompanies from '../SisterCompanies/SisterCompanies';

const Home = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
            <Review></Review>
            <SisterCompanies></SisterCompanies>
            <Footer></Footer>
            
        </main>
    );
};

export default Home;