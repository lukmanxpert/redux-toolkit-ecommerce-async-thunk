import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from './productsSlice';

const AddProducts = () => {
    const [product, setProducts] = useState({
        title: '',
        description: '',
        price: ''
    })

    const dispatch = useDispatch()
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProducts((prevProduct) => ({ ...prevProduct, [name]: value }))
        console.log(name, value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addProducts(product))
    }
    console.log(product);
    return (
        <div>
            <h1 className='text-2xl font-bold underline text-center'>Add Products</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2 p-4'>
                <label>
                    Title:
                    <input className='border-2 rounded-sm mx-2' name='title' value={product.title} onChange={handleChange} placeholder='Title' required type="text" />
                </label>
                <label>
                    Description:
                    <input className='border-2 rounded-sm mx-2' name='description' value={product.description} onChange={handleChange} placeholder='Description' required type="text" />
                </label>
                <label>
                    Price:
                    <input className='border-2 rounded-sm mx-2' name='price' value={product.price} onChange={handleChange} placeholder='Price' required type="number" />
                </label>
                <button type="submit">Add Products</button>
            </form>
        </div>
    );
};

export default AddProducts;