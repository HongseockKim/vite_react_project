import {Drawer} from "@mui/material";
import {useEffect, useState} from "react";
import MenuCom from "./MenuCom.jsx";
import {CommonMobxRequest} from "../mobx/CommonMobx.js";
import {observer} from "mobx-react";

const DrawerCom = observer(() => {
    const [open,setOpen] = useState(false);
    useEffect(() => {
        console.log('#####')

        toggleDrawer(CommonMobxRequest.isOpen)
    }, [CommonMobxRequest.isOpen]);
    console.log("=>(DrawerCom.jsx:11) CommonMobxRequest.isOpen", CommonMobxRequest.isOpen);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return(
        <>
            <Drawer
                anchor='left'
                open={open}
                onClose={toggleDrawer(false)}
                // onOpen={toggleDrawer(true)}
            >
              <MenuCom setOpen={setOpen}/>
            </Drawer>
        </>
    )
})

export default DrawerCom;