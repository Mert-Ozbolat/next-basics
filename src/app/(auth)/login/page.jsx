import React from 'react'



export const metadata = {
    title: "Login",
    description: "Giriş Yapınız",
};


export const delay = async (ms = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}


const Login = async () => {
    await delay(2000)
    throw new Error('Giriş Yetkini Yk')
    return (
        <div>Login</div>
    )
}

export default Login