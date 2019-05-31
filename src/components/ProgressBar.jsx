import React from 'react';

const Progressbar = ({ className, progress }) => {
    return (
        <div className={className} >
            <div className="progress-complete"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    )
}

export default Progressbar;