import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

import SearchBar from '../components/SearchBar.jsx'
import ProfileInfo from '../components/ProfileInfo.jsx'

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    
    const onLogOutHandler = () => {
        navigate("/login")
    }

    const onSearchChangeHandler = (event) => {
        setSearchQuery(event.target.value)
    }

    const onSearchHandler = () => {
        
    }

    const onClearHandler = () => {
        setSearchQuery("")
    }

    return (
        <div className="px-8 py-4 flex items-center justify-between bg-white drop-shadow">
            <h2 className="text-xl font-medium text-black">Notes App</h2>
            <SearchBar value={searchQuery} onSearchChangeHandler={onSearchChangeHandler} onSearchHandler={onSearchHandler} onClearHandler={onClearHandler} />
            <ProfileInfo onLogOutHandler={onLogOutHandler} />
        </div>
    )
}

export default Navbar