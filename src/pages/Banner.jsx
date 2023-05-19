import React from 'react';
import img1 from "../assets/cabbage-patch-kids.webp";
import img2 from "../assets/collection-children-toys-kid-development-entertainment-isolated-white-background-bundle-tools-kid-amusement-play-bright-colored-vector-icons_87946-4696.avif";
import img3 from "../assets/toys-pictures_csp14363980.webp";
import img4 from "../assets/Reviewed.com-RvEW-27182-octopus-plushie.webp";

const Banner = () => {
    return (
        <div className="carousel w-full h-[700px] mt-4">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0">
                    <div className='space-y-7 w-3/5 pl-28'>
                        <h2 className='text-7xl font-bold text-green-500'>"Play With Your Favorite Toys"</h2>
                        <p className='text-3xl text-orange-500 font bold'>Welcome to the magical world of toys, where imagination knows no bounds and the possibilities for fun are endless!!!</p>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-10">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0">
                    <div className='space-y-7 w-3/5 pl-28'>
                        <h2 className='text-7xl font-bold text-green-500'>"Play With Your Favorite Toys"</h2>
                        <p className='text-3xl text-orange-500 font bold'>Welcome to the magical world of toys, where imagination knows no bounds and the possibilities for fun are endless!!!</p>
                    </div>
                </div>
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0">
                    <div className='space-y-7 w-3/5 pl-28'>
                        <h2 className='text-7xl font-bold text-green-500'>"Play With Your Favorite Toys"</h2>
                        <p className='text-3xl text-orange-500 font bold'>Welcome to the magical world of toys, where imagination knows no bounds and the possibilities for fun are endless!!!</p>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-10">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0">
                    <div className='space-y-7 w-3/5 pl-28'>
                        <h2 className='text-7xl font-bold text-green-500'>"Play With Your Favorite Toys"</h2>
                        <p className='text-3xl text-orange-500 font bold'>Welcome to the magical world of toys, where imagination knows no bounds and the possibilities for fun are endless!!!</p>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-10">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4}className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0">
                    <div className='space-y-7 w-3/5 pl-28'>
                        <h2 className='text-7xl font-bold text-green-500'>"Play With Your Favorite Toys"</h2>
                        <p className='text-3xl text-orange-500 font bold'>Welcome to the magical world of toys, where imagination knows no bounds and the possibilities for fun are endless!!!</p>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-10">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;