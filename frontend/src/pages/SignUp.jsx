import React, { useState } from 'react'

import Navbar from '../components/Navbar.jsx'

function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const onNameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const onSignUpHandler = async (event) => {
        event.preventDefault()

    }

    return (
        <>
            <Navbar />

            <div className="mt-28 flex items-center justify-center">
                <div className="w-96 px-7 py-10 bg-white border rounded-md">
                    <form onSubmit={onSignUpHandler}>
                        <h4 className="text-2xl mb-6">Sign Up</h4>

                        <input type="text" placeholder="Name" value={name} onChange={onNameChangeHandler} className="input-box" />
                        <input type="text" placeholder="E-mail" value={email} onChange={onEmailChangeHandler} className="input-box" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp