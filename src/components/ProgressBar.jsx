import React from 'react';

const Progressbar = ({ className, progress, showProgress }) => {
    return (
        <div className={className}
            style={{ visibility: showProgress ? 'visible' : 'hidden' }}
        >
            <div className="progress-complete"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    )
}

export default Progressbar;