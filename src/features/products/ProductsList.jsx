import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, fetchProducts } from './productsSlice';

const ProductsList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    const { products, isLoading, isError } = useSelector((state) => state.productsR)
    return (
        <div className=''>
            <h1 className='text-center text-2xl font-bold my-2 underline'>Products List {`(${products.length})`}</h1>
            {isLoading && <h1 className='text-lg text-center font-bold text-green-500'>Loading...</h1>}
            {isError && <h1>{isError}</h1>}
            <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4'>
                {
                    !isLoading && !isError && products.length > 0 && products.map((product) => {
                        return <article key={product.id} className='bg-slate-300 p-2 rounded-lg'>
                            <h1 className='font-bold text-xl'>ID: {product.id}</h1>
                            <h1 className='text-xl'><span className='font-bold'>Title:</span> {product.title}</h1>
                            <p><span className='font-bold'>Description:</span> {product.description}</p>
                            <p className=''><span className='font-bold'>Price:</span> {product.price}</p>
                            <button onClick={() => dispatch(deleteProducts(product.id))}>Delete</button>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default ProductsList;