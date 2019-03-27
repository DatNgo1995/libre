import React from 'react';
import {FaBars} from 'react-icons/fa';

import { FaSearch } from "react-icons/fa";
export const Nav = ({menuList, manageTitle}) => {
    const renderMenu = (options) => 
   options.map ( option => !option.subMenus
    ? <li onClick = {manageTitle.bind(this, option.name)}>{option.name}</li>: <li>{option.name}<ul>{renderMenu(option.subMenus)}</ul></li>)
  

    return (
        <div>
            <header className="App-header">
        <FaBars className="fabars"/>
          <div className="search-area">
            
            <FaSearch  className="fasearch" />
            <input type="text" placeholder="Search"/>
          </div>
        </header>
           
            <nav>
                <ul>
                    {renderMenu(menuList)}
                </ul>
            </nav>
        </div>
    )
}

