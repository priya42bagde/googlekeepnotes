import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <p className="copy">copyright © {year}</p>
        </div>
    )
}

export default Footer
