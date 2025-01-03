import React from 'react'

function NoteCard({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) {
    return (
        <div>
            <div className="">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-slate-500">{date}</span>
                    <i className="ri-pushpin-line">{content?.slice(0, 60)}</i>
                </div>
            </div>
        </div>
    )
}

export default NoteCard