import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productsSlice';

const ProductsList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const { products, isLoading, isError } = useSelector((state) => state.productsR)
    return (
        <div>
            <h1>Products List</h1>
        </div>
    );
};

export default ProductsList;