import React from 'react'

import Navbar from '../components/Navbar.jsx'
import NoteCard from '../components/NoteCard.jsx'

function Home() {
    return (
        <>
            <Navbar />

            <div className="container mx-auto">
                <NoteCard title="Meeting with the team" />
            </div>
        </>
    )
}

export default Home