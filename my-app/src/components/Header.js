import React from "react";
import { FaBars } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";

export const Header = ({toggleNav}) => 
      <header className="App-header">
      <FaBars className="fabars" onClick= {toggleNav} />
      <div className="search-area">
        <FaSearch className="fasearch" />
        <input type="text" placeholder="Search" />
      </div>
      </header>
 