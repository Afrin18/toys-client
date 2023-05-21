import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyToyCard from './MyToyCard';

const MyToys = () => {
    const toys = useLoaderData();

    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-green-600 mb-8'>My toys</h2>
            <div className='grid grid-cols-2'>
                {
                toys.map(toy => <MyToyCard
                key={toy._id}
                toy={toy}
                ></MyToyCard>)
            }
            </div>
        </div>
    );
};

export default MyToys;