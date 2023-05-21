import React from 'react';

const ToyCard = ({ toy }) => {
    const {_id, image, toy_name, seller_name, seller_email, category_name, price, rating, available_quan, description } = toy;

    const handleDelete = _id => {
        console.log(_id);
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{seller_name}</h2>
                <p>{seller_email}</p>
                <p>{category_name}</p>
                <p>{price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="btn-group space-x-2">
                        <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                        <button className="btn">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;