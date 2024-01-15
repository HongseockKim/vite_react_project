import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import React from "react";
import {observer} from "mobx-react";
import {CommonMobxRequest} from "../mobx/CommonMobx.js";

const HeaderCom = observer(()=>{
    const handleMenuOpenFuc = () => {
        CommonMobxRequest.handleMenuOpen();
        console.log("=>(HeaderCom.jsx:10) CommonMobxRequest.isOpen", CommonMobxRequest.isOpen);
    }
    return(
        <AppBar position="static">
        <Toolbar>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuOpenFuc}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
})

export default HeaderCom