import React from 'react';

const ExitButton = ({ toggleMenu }) => {
    return (
        <i
            className="far fa-times-circle exit-button"
            onClick={() => toggleMenu('display')}
        />
    )
}

export default ExitButton;