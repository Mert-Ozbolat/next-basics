import Link from 'next/link';
import React from 'react'



export const generateMetadata = async ({ params }) => {
    const id = (await params).id;
    return {
        title: id + " id'li ürünün detayı"
    }
}


const Detail = async ({ params }) => {
    const id = (await params).id;
    return (
        <div>
            <Link className='mt-20' href='.'>Geri dön</Link>

            <div>
                <span>{id} id'li lemen</span>
                <span>Ürünler sayfası</span>
            </div>

            <Link href={`${id}/reviews`}>Yoruma Bak</Link>
        </div>
    )
}

export default Detail