import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({ allToy }) => {
    const { category_id, category_name, toy_name, price, category, seller_name } = allToy;
    console.log(allToy.category);

    return (
        <div>
            <p>{seller_name}</p>
            <br />
            <p>{category_name}</p>
            <br />
            <p>{toy_name}</p>
            <Link to=''>
                <button className='btn btn-accent'>view</button>
            </Link>
        </div>
    );
};

export default ToysCard;