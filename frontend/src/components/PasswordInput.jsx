import React, { useState } from 'react'

function PasswordInput({ placeholder, value, onPasswordChange }) {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="mb-3 px-4 flex items-center bg-transparent border-[1.5px] rounded-md">
            <input type={showPassword ? "text" : "password"} placeholder={placeholder || "Password"} value={value} onChange={onPasswordChange} className="w-full mr-3 py-3 text-sm bg-transparen rounded-md outline-none" />
            {   
                showPassword
                ? <i className="ri-eye-fill text-primary cursor-pointer" onClick={toggleShowPassword}></i>
                : <i className="ri-eye-off-fill text-slate-400 cursor-pointer" onClick={toggleShowPassword}></i>
            }
        </div>
    )
}

export default PasswordInput