import React from 'react';

const Dog = ({dog, getDog}) => {
    return (
        <div>
            {dog}
            <button onClick={() => getDog(dog)}>Delete</button>
        </div>
    );
};

export default Dog;