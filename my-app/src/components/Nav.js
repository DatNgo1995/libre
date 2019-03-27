import React from 'react';
import {FaBars} from 'react-icons/fa';
export const Nav = ({menuList, manageTitle}) => {
    const renderMenu = (options) => 
   options.map ( option => !option.subMenus
    ? <li onClick = {manageTitle.bind(this, option.name)}>{option.name}</li>: <li><ul>{renderMenu(option.subMenus)}</ul></li>)
  

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

