import {ListItem, ListItemButton, ListItemText, MenuList} from "@mui/material";
import {observer} from "mobx-react";
import {MenuMobxRequest} from "../mobx/MenuMobx.js";
import {useNavigate} from "react-router-dom";

const MenuCom = observer((props) => {
    const navigate = useNavigate();
    const handleLocation = (path) => {
        if(path) navigate(path);
    }

    const handleHomeClick = (event) => {
        console.log("=>(MenuCom.jsx:17) event", event);
        props.setOpen(false)
        handleLocation('/');
    };

    const handleSingleClick = () => {
        props.setOpen(false)
        console.log(MenuMobxRequest.isOpen);
    };

    const btnList = [
        {
            id:1,
            name: 'HOME',
            onClick: handleHomeClick,
        },
        {
            id:2,
            name: 'Single',
            onClick:handleSingleClick,
        },
    ]
    return(
        <MenuList dense variant='menu' sx={{width: 200,maxWidth: '100%'}}>
            {
                btnList.length > 0 && btnList.map((menuItem,idx)=>{
                    return(
                        <ListItem key={menuItem.id}>
                            <ListItemButton  onClick={() => menuItem.onClick(idx)}>
                                <ListItemText>{menuItem.name}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
            {/*<MenuItem>*/}
            {/*    <ListItemText inset>Single</ListItemText>*/}
            {/*</MenuItem>*/}
        </MenuList>
    )
});
export default MenuCom