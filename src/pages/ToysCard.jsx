import React from 'react';

const ToysCard = ({allToy}) => {
    const {category_id, category_name, category} = allToy;

    return (
        <div>
            <p>{category_name}</p>
            <p>{category.}</p>
        </div>
    );
};

export default ToysCard;