import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

import SearchBar from '../components/SearchBar.jsx'
import ProfileInfo from '../components/ProfileInfo.jsx'

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    
    const onLogOut = () => {
        navigate("/login")
    }

    const onSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const onSearch = () => {
        
    }

    const onClear = () => {
        setSearchQuery("")
    }

    return (
        <div className="px-8 py-4 flex items-center justify-between bg-white drop-shadow">
            <h2 className="text-xl font-medium text-black">Notes App</h2>
            <SearchBar value={searchQuery} onSearchChange={onSearchChange} onSearch={onSearch} onClear={onClear} />
            <ProfileInfo onLogOut={onLogOut} />
        </div>
    )
}

export default Navbar