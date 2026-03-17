import React from 'react';
import Plans from '../Plans/Plans';

const pricingPlans = [
    {
        id: 1,
        name: "Basic",
        price: "$0",
        duration: "Free",
        features: [
            "1 Website",
            "Basic Support",
            "Limited Storage",
            "Community Access"
        ],
        buttonText: "Get Started",
        popular: false
    },
    {
        id: 2,
        name: "Standard",
        price: "$9",
        duration: "monthly",
        features: [
            "5 Websites",
            "Priority Support",
            "10GB Storage",
            "Free Templates"
        ],
        buttonText: "Start Free Trial",
        popular: true
    },
    {
        id: 3,
        name: "Premium",
        price: "$29",
        duration: "monthly",
        features: [
            "Unlimited Websites",
            "24/7 Support",
            "100GB Storage",
            "Advanced Features"
        ],
        buttonText: "Upgrade Now",
        popular: false
    }
];

const PricingCard = () => {
    return (
        <div className='my-10 max-w-6xl mx-auto w-11/12'>
            <h2 className='text-lg md:text-2xl font-bold'>Pricing for Developers</h2>

            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5ds;'>
                {
                    pricingPlans.map(plans => <Plans plans={plans}></Plans>)
                }
            </div>
        </div>
    );
};

export default PricingCard;