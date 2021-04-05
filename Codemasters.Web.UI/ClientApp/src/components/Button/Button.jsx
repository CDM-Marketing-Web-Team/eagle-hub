import React from 'react';

import './Button.scss';

export default function Button(props) { 
    
    const handleClick = (link) => {
        window.location.href = link;
    }

    return (
        <div onClick={() => handleClick(props.link)} className="button button--light">
            {props.children}
        </div>
    )
}
