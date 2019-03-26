import React from 'react';
import {FaBars} from './react-icons/fa';
export const Nav = (menuList) => {
    return (
        <div>
            
            <FaBars />
            <nav>
                <ul>
                    {renderMenu(menuList)}
                </ul>
            </nav>
        </div>
    )
}

const renderMenu = (options) => {
    options.map ( option => typeof option === 'string'
    ? <li>{option}</li>: <li><ul>{renderMenu(option)}</ul></li>)
}