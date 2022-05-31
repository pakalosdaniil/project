import { Box, Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { productContext } from '../../contexts/productsContext';
import ProductCard from '../ProductCard/ProductCard';

const ProductsLists = () => {
    const {getProducts, products} = useContext(productContext)
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Container>
            <Box display={"flex"} flexWrap={'wrap'} justifyContent={'center'} padding={'30px'}>
           {products.map ((item) => <ProductCard key={item.id} item={item}/>) }
           </Box>
        </Container>
    );
};

export default ProductsLists;