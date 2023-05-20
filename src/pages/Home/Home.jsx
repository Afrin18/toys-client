import React from 'react';
import Banner from '../Banner';
import Gallery from '../Gallery';
import Upcoming from '../Upcoming';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;