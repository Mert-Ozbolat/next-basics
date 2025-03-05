import React from 'react'
import { Link } from 'next/link';

const Layout = ({ children }) => {
    return (
        <div className='flex w-full p-5 gap-10'>
            <aside className='border rounded text-vase nav flex flex-col'>
                <Link href='/login'>Giriş Yap</Link>
                <Link href='/signin'>Kayıt Yap</Link>
            </aside>

            <div>{children}</div>
        </div>
    )
}

export default Layout