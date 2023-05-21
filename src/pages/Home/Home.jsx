import React from 'react';
import Banner from '../Banner';
import Gallery from '../Gallery';
import Upcoming from '../Upcoming';
import ShortInfo from '../ShortInfo';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Upcoming></Upcoming>
            <ShortInfo></ShortInfo>
        </div>
    );
};

export default Home;