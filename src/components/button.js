import React from 'react';

export default function Button({icon}) {
    if(icon) {
        return (
            <a >
                <i className={icon}></i>
            </a>
        )
    } 
}