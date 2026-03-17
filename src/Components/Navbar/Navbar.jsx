import { X, Menu } from 'lucide-react';
import React, { useState } from 'react';
import Links from './Links';

const navItems = [
    {
        id: 1,
        name: "Home",
        pathName: "/"
    },
    {
        id: 2,
        name: "About",
        pathName: "/about"
    },
    {
        id: 3,
        name: "Pricing",
        pathName: "/pricing"
    },
    {
        id: 4,
        name: "Monthly Plan",
        pathName: "/pricing/monthly"
    },
    {
        id: 5,
        name: "Yearly Plan",
        pathName: "/pricing/yearly"
    },
    {
        id: 6,
        name: "Contact",
        pathName: "/contact"
    }
];

const Navbar = () => {

    const [open, SetOpen] = useState(true);
    const links = navItems.map(items => <Links key={items.id} items={items}></Links>)

    return (
        <nav className='flex justify-between items-center w-11/12 mx-auto mt-5'>
            <div className='flex gap-2'>
                <div onClick={() => SetOpen(!open)}>
                    <span className='cursor-pointer'>{open ? <Menu className='md:hidden'></Menu> : <X className='md:hidden'></X>}</span>
                    <ul className={`
                    p-5
                    bg-amber-800
                    absolute
                    duration-1000
                    rounded-xl
                    ${open ? '-top-80' : 'top-14'}
                    md:hidden
                    space-y-2
                    `}>
                        {links}
                    </ul>
                </div>
                <a href='/' className='text-xl font-bold'>Dev<span className='text-blue-400'>Hoist</span></a>
            </div>
            <div>
                <ul className='items-center space-x-4 md:flex hidden'>
                    {
                        links
                    }
                </ul>
            </div>

            <div>
                <button className='btn btn-primary'>Contact</button>
            </div>
        </nav >
    );
};

export default Navbar;