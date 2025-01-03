import React from 'react'

function SearchBar({ value, onSearchChangeHandler, onSearchHandler, onClearHandler }) {
    return (
        <div className="w-80 px-4 flex items-center bg-slate-100 rounded-md">
            <input type="text" placeholder="Search notes" value={value} onChange={onSearchChangeHandler} className="w-full py-[11px] text-xs bg-transparent outline-none" />
            { value && <i className="ri-close-line mr-3 text-xl text-slate-500 hover:text-black cursor-pointer" onClick={onClearHandler}></i> }
            <i className="ri-search-line text-slate-400 hover:text-black cursor-pointer" onClick={onSearchHandler}></i>
        </div>
    )
}

export default SearchBar