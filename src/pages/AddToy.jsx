import React from 'react';

const AddToy = () => {

    const handleAddToy = event =>{
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const category_name = form.category_name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quan = form.available_quan.value;
        const description = form.description.value;

        const newToy = {image, toy_name, seller_name, seller_email, category_name, price, rating, available_quan, description};
        console.log(newToy);
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-green-600 mb-8'>Add A Toy</h2>
            <form onSubmit={handleAddToy} className='px-8'>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Toy Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="toy_name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller_name" placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="seller_email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category_name" placeholder="Sub Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="available_quan" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div>
                <div className="form-control w-full mb-6">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Detail Description" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <input type="submit" value="Add A Toy" className='btn btn-block'/>
            </form>
        </div >
    );
};

export default AddToy;