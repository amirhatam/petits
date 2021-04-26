import { IconButton, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import SideDrawer from "./SlideDrawer";
import "../assets/style/Header.css"

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value);

    
  };
 
  return (
    <div >
      <AppBar
      className="header_logo  " 
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px",
        }}
      >
      
        <Toolbar>
          <IconButton
      
      aria-label="Menu"
      color="inherit"
      onClick={() => toggleDrawer(true)}
      >
            <MenuIcon  />
          </IconButton >
          <div  >
           
          </div>
          <SideDrawer  open={drawerOpen} onClose={toggleDrawer} />
        </Toolbar>
            
      </AppBar>
    </div>
  );
}

export default Header;