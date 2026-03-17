import React from 'react';
import Feature from '../Feature/Feature';

const Plans = ({ plans }) => {
    const { name, duration, price, popular, features, buttonText } = plans;

    return (
        <div className='px-4 py-5 sm:p-5 space-y-10 bg-amber-800 opacity-98 duration-1000 rounded-xl'>
            <div className='flex items-center justify-between flex-wrap'>
                <h2 className='text-xl sm:text-2xl'>{name} Plan</h2>
                {popular && <div className="badge badge-soft badge-secondary">Most Popular</div>}
            </div>
            <div className=''>
                <p className='text-xl font-bold text-white'>{price} {duration}</p>
            </div>
            <ul className=''>
                <h2>Features</h2>
                <div className='mt-2 space-y-2'>
                    {
                        features.map(feature => <Feature feature={feature}></Feature>)
                    }
                </div>
            </ul>

            <button className='w-full md:w-[50%] btn'>{buttonText}</button>
        </div>
    );
};

export default Plans;