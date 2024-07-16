import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Delight delivered to your doorstep</h2>
                <p>Bringing gourmet to your door.</p>
                <button><a href='#explore-menu'>View Menu</a></button>
            </div>
        </div>
    )
}

export default Header