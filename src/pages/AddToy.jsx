import React from 'react';

const AddToy = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-green-600 mb-8'>Add A Toy</h2>
            <form>
                <div className='md:flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Toy Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="tName" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='md:flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sName" placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="" placeholder="Sub Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="" placeholder="Detail Description" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>

            </form>
        </div >
    );
};

export default AddToy;