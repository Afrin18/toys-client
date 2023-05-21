import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';

const AllToys = () => {
    const toys = useLoaderData();

    return (
        <div className=''>
            <h2 className='text-4xl font-bold text-center text-green-600 mb-8'>All toys</h2>
            <div className='grid grid-cols-2'>
                {
                toys.map(toy => <ToyCard
                key={toy._id}
                toy={toy}
                ></ToyCard>)
            }
            </div>
        </div>
    );
};

export default AllToys;