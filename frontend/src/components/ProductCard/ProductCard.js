import React from 'react';
import Card from '../UI/Card/Card'

const ProductCard = props => {
    const {name, photo, id} = props.product;

    const link = {
        text: 'Read more',
        url: '/products/' + id
    };

    return <Card header={name} image={photo} link={link}/>
};

export default ProductCard;