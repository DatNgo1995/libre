import React from "react";
export const Nav = ({ menuList, manageTitle, navDisplay }) => {
  
  const renderMenu = (options,isSubmenu = false) =>
    options.map(option =>
      !option.subMenus ? (
        isSubmenu ?
        <li className="submenu-text" onClick={manageTitle.bind(this, option.name)}>{option.name}</li>
        :
        <li onClick={manageTitle.bind(this, option.name)}>{option.name}</li>
      ) : (
        <li>
          {option.name}
          <ul>{renderMenu(option.subMenus,true)}</ul>
        </li>
      )
    );


  return (
    

      <nav className="navbar" style={{display:navDisplay}} >
        <ul>{renderMenu(menuList)}</ul>
      </nav>
      
  );
};
