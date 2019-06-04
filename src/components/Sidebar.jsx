import React from 'react';

const Sidebar = (props) => {
    return (
        <div style={{
            transform: props.show ? 'translateX(0vw)' : 'translateX(-10vw)',
            opacity: props.show ? '1' : '0'
        }} className={props.className} >
            <i className="fas fa-search search-icon"></i>
            <input type="text" placeholder="search" />
            <nav>
                <p>Add task</p>
                <p>Sort tasks</p>
            </nav>
        </div>
    )
}

export default Sidebar;