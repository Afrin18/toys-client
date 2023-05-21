import React, { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2';


const MyToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext);

    // const { _id, image, toy_name, seller_name, seller_email, category_name, price, rating, available_quan, description } = toy;

    let myToy = '';
    if (toy.seller_email === user.email) {
        myToy = toy;
        // console.log(myToy);
    }
    else {
        return;
    }
    const { _id, image, toy_name, seller_neame, seller_email, category_name, price, rating, available_quan, description } = myToy;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">

                <figure><img src={myToy.image} alt="" /></figure>
                <div className="card-body">
                    {/* <p>ID: {myToy._id}</p> */}
                    <h2 className="card-title">{myToy.seller_name}</h2>
                    <p>{myToy.seller_email}</p>
                    <p>{myToy.category_name}</p>
                    <p>{myToy.price}</p>
                    <p>{myToy.description}</p>
                    <div className="card-actions justify-end">
                        <div className="btn-group space-x-2">
                            <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                            <button className="btn">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToyCard;