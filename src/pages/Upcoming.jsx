import React from 'react';

const Upcoming = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl font-bold text-center text-green-600 mb-8'>New Collections..</h2>

            <div className='grid md:grid-cols-3 justify-items-center gap-4'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1670435731-GUEST_af88d985-6f1e-4dcb-bf34-9302ebc74c0b.jpg?crop=1xw:1.00xh;center,top&resize=980:*" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Sweet Horse
                <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end mt-9 ">
                        <button className="badge badge-outline">View Details</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://media.istockphoto.com/id/1139848925/photo/black-cow-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=P-T07qEv2S23ML9OGKAD8f1ggfNI4i4sCW1RPPvkeCU=" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Farm Cow
                <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end mt-9 ">
                        <button className="badge badge-outline">View Details</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://cdn.shopify.com/s/files/1/2281/5369/products/african-elephant-baby-704949_700x700.jpg?v=1610650008" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        African Elephant
                <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end mt-9 ">
                        <button className="badge badge-outline">View Details</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://cdn.shopify.com/s/files/1/2281/5369/products/crested-gecko-toy-figure-922095_512x512.jpg?v=1643872432" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Red Tanzered
                <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end mt-9 ">
                        <button className="badge badge-outline">View Details</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://shop.zsl.org/sites/default/files/styles/product_teaser/public/new_baby_giraffe_soft_toy.jpg?itok=vWBlcEVm" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Baby Ziraf
                <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end mt-9 ">
                        <button className="badge badge-outline">View Details</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i0.wp.com/douglascuddletoy.com/wp-content/uploads/2023/03/4330.jpg?resize=400%2C400&ssl=1" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Douglas Cuddle
                <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end mt-9 ">
                        <button className="badge badge-outline">View Details</button>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Upcoming;