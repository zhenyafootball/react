import React from 'react';

const Cat = ({cat,getCat}) => {
    return (
        <div>
            {cat}
            <button onClick={()=>getCat(cat)}>Delete</button>
        </div>
    );
};

export default Cat;