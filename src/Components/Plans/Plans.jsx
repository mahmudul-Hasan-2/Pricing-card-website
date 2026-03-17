import React from 'react';

const Plans = ({ plans }) => {
    const { name, duration, price } = plans
    return (
        <div className='p-5 bg-amber-500'>
            <div className='flex items-center justify-between'>
                <h2>{name} Plan</h2>
                <p>{price}</p>
            </div>
            <div className='mt-3'>
                <p>{duration}</p>
            </div>
        </div>
    );
};

export default Plans;