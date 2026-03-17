import React from 'react';

const Links = ({ items }) => {
    return (
        <div>
            <a href={items.pathName} className='font-bold'>{items.name}</a>
        </div>
    );
};

export default Links;