import React from 'react';
import LoadingIcon from '../loading_icon';

const CategoryItem = ({product, shops}) => {
    
    if (shops === {}) return <LoadingIcon/>;
    return (
        <li >
            <img src={product.imageUrls[0]} />
            <p>{product.title}</p>
            <p>{shops[product.shopId].name}</p>
            <p>{product.price}</p>

        </li>
    );
}

export default CategoryItem;