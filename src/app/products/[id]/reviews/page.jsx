import Link from 'next/link';
import React from 'react'

const Reviews = async ({ params }) => {

    const { id } = (await params);

    return (
        <div>
            <Link className='mt-20' href='.'>Geri dön</Link>

            <div className='mt-10 p-5'>
                <span>{id} id'li eleman</span>
                <br />
                <span>Yorumlar sayfası</span>
            </div>
        </div>
    )
}

export default Reviews