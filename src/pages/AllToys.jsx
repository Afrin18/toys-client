import React from 'react';
import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';
import ToysCard from "./ToysCard";


const AllToys = () => {
    const allToys = useLoaderData();
    // const [allToys, setAllToys] = useState([]);

    // useEffect( () => {
    //     fetch('http://localhost:5000/toys')
    //     .then(res => res.json())
    //     .then(data => setAllToys(data))
    // } , [])

    return (
        <div className='mt-10'>
            <h2 className='text-4xl text-center font-bold text-green-500'>...All Toys...</h2>
            <div>
                {
                    allToys.map(allToy => <ToysCard
                        key={allToys._id}
                        allToy={allToy}
                    ></ToysCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;