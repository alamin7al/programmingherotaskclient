import React from 'react';
// import AllWatchHome from './AllWatchHome';
import Footer from './Contacts/Footer';
import Features from './Features';
import HomeCard from './HomeCard';
import RevewShow from './Revew/RevewShow';
import RevewSlot from './Revew/RevewSlot';
import Sliders from './Sliders.';
import WatchHome from './WatchHome';



const Home = () => {
    return (
        <div>
            {/* <CourseMain></CourseMain> */}
            <Sliders></Sliders>
            <HomeCard></HomeCard>
            <WatchHome></WatchHome>
            {/* <AllWatchHome></AllWatchHome> */}
            <Features></Features>

            <RevewShow></RevewShow>
            <RevewSlot></RevewSlot>
            <Footer></Footer>
        </div>
    );
};

export default Home;