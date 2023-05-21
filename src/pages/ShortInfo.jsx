import React from 'react';

const ShortInfo = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl font-bold text-center text-green-600 mb-8'>Our Short Information</h2>

            <div className='grid md:grid-cols-4 gap-4 justify-items-center'>
                <div className="card w-72 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <img className='h-14 w-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPANaoa2aW1R0pleH99QfNYrRVUK7MJfnfw&usqp=CAU" alt=""/>
                        <h2 className="card-title text-3xl mt-4">Seller</h2>
                        <p className='text-2xl'>5000+</p>
                    </div>
                </div>
                <div className="card w-72 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <img className='h-14 w-16 bg-white' src="https://cdn-icons-png.flaticon.com/512/3081/3081991.png" alt=""/>
                        <h2 className="card-title text-3xl mt-4">All Toys</h2>
                        <p className='text-2xl'>20000+</p>
                    </div>
                </div>
                <div className="card w-72 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <img className='h-14 w-16 bg-white' src="https://cdn-icons-png.flaticon.com/512/5335/5335719.png" alt=""/>
                        <h2 className="card-title text-3xl mt-4">New Collection</h2>
                        <p className='text-2xl'>1000+</p>
                    </div>
                </div>
                <div className="card w-72 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <img className='h-14 w-16' src="https://i.pinimg.com/236x/19/5f/e5/195fe5956b3fe00bad7b4808be590500.jpg" alt=""/>
                        <h2 className="card-title text-3xl mt-4">Upcoming</h2>
                        <p className='text-2xl'>400+</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShortInfo;