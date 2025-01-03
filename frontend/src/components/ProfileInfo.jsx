import React from 'react'

import { getInitials } from '../utils/utils.js'

function ProfileInfo({ onLogOutHandler }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full font-medium text-slate-950 bg-slate-100">{getInitials("Axel Zhan")}</div>
            <div>
                <p className="text-sm font-medium">Axel Zhan</p>
                <button className="text-sm text-slate-700 underline" onClick={onLogOutHandler}>Log Out</button>
            </div>
        </div>
    )
}

export default ProfileInfo