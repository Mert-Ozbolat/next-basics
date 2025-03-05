import Link from 'next/link'
import React from 'react'


export const metadata = {
    title: "Ürünler",
    description: "En iyi ürünlerr",
};


const Product = () => {
    return (
        <div>
            <h1>Product Sayfası</h1>

            <br />

            <div>
                <Link className='p-3' href='/products/1'>Ürün-1</Link>
                <Link className='p-3' href='/products/2'>Ürün-2</Link>
                <Link className='p-3' href='/products/3'>Ürün-3</Link>
            </div>

        </div>
    )
}

export default Product