import React from 'react'
import { useNavigate } from 'react-router-dom'

import ProfileInfo from '../components/ProfileInfo.jsx'

function Navbar() {
    const navigate = useNavigate()
    
    const onLogOutHandler = () => {
        navigate("/login")
    }

    return (
        <div className="px-8 py-4 flex items-center justify-between bg-white drop-shadow">
            <h2 className="text-xl font-medium text-black">Notes App</h2>
            <ProfileInfo onLogOutHandler={onLogOutHandler} />
        </div>
    )
}

export default Navbar