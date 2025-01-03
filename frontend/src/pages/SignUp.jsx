import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import PasswordInput from '../components/PasswordInput.jsx'

import { validateEmail } from '../utils/validate.js'

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

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const onSignUpHandler = async (event) => {
        event.preventDefault()

        if (!name) {
            setError("Please enter your name.")
            return
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid e-mail address.")
            return
        }
                
        if (!password) {
            setError("Please enter the password.")
            return
        }
        
        setError(null)
        
        // Sign Up API
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
                        <PasswordInput value={password} onPasswordChangeHandler={onPasswordChangeHandler} />

                        { error && <p className="pb-1 text-red-500 text-xs">{error}</p> }

                        <button type="submit" className="btn-primary">Create Account</button>
                        
                        <p className="text-sm text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="text-primary font-medium underline">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp