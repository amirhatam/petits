import { Drawer, List, ListItem } from '@material-ui/core'
import React from 'react'

function SideDrawer(props) {
    const {open, onClose} = props
    return (
       <Drawer anchor="left" open={open} onClose={()=> onClose(false)}>
           <List component="nav">
               <ListItem button onClick={() => console.log("Featured")}>
               <a href="https://github.com/amirhatam" ><i class="fab fa-github"></i></a>
               </ListItem>

               <ListItem button onClick={() => console.log("Venue NFO")}>
               <a href="https://www.linkedin.com/in/amir-hatam-7ba7601ba/" ><i class="fab fa-linkedin"></i></a>
               </ListItem>

               <ListItem button onClick={() => console.log("Highlights")}>
               <a href="tel:07 68 57 35 81" class="a-footer" title="07 68 57 35 81"><i class="fas fa-phone-square" ></i></a>
               </ListItem>

               <ListItem button onClick={() => console.log("Location")}>
               <a href="mailto:amirhatam136@gmail.com" class="a-footer" title="amirhatam136@gmail.com"><i class="fas fa-envelope"></i></a>
               </ListItem>
           </List>
       </Drawer>
    )
}

export default SideDrawer
