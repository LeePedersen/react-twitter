import React from "react";

function Header(){
  var inputStyle = {
    borderRadius: '4px'
  }

  var navItems = {
    marginLeft: '16px',
    marginRight: '16px'
  }
  
  return(
    <div>
      <button style={navItems}>Home</button>
      <button style={navItems}>Notifications</button>
      <button style={navItems}>Messages</button>
      <input style={inputStyle} placeholder="Search"></input>
      <button style={navItems}>Tweet</button>
    </div>
  );
}

export default Header;
