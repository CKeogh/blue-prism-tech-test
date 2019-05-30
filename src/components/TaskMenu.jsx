import React from 'react';

const TaskMenu = ({ className, view }) => {
    return (
        <div className={className} style={{
            opacity: view === 'menu' ? '1' : '0',
            visibility: view === 'menu' ? 'visible' : 'hidden'
        }} >
            <p className="menu-option" >Auto assign</p>
            <p className="menu-option" >Select Workers</p>
            <p className="menu-option" >Schedule</p>
            <p className="menu-option" >Archive</p>
        </div>
    )
}

export default TaskMenu;