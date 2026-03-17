import { CircleCheck } from 'lucide-react';
import React from 'react';

const Feature = ({ feature }) => {
    return (
        <div className=''>
            <p className='flex items-center gap-3'><CircleCheck></CircleCheck> {feature}</p>
        </div>
    );
};

export default Feature;