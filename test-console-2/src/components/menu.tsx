import {Divider, Drawer, List, ListItem, ListItemText, styled, Typography, withStyles} from "@mui/material";
import React, {CSSProperties, ReactElement} from "react";
import {Logo} from "./logo";
import {BuildTag} from "./buildTag";
import {CustomMethod} from "../types/testConsole.types";

let DevToolsDrawer = styled(Drawer)({
    paper: {
        minWidth: 300,
        maxWidth: 700,
        padding:'10px 10px'
    }
});

function Menu({open, customMethods, onClose, buildName, customComponents}:{
    open:boolean,
    buildName:string,
    customMethods:CustomMethod[],
    customComponents?: ReactElement|ReactElement[],
    onClose:()=>void,
}){
    return <DevToolsDrawer open={open} anchor='right' onClose={onClose}>
        <Logo/>
        <Divider/>
        <BuildTag buildName={buildName}/>
        <Divider/>
        <Typography style={{fontWeight: 500}}>Custom Functions</Typography>
        <List dense={true}>
            {customMethods.map(({name,method}:CustomMethod,i:number)=><ListItem key={name} onClick={method}><ListItemText>{i+1}. {name}</ListItemText></ListItem>)}
        </List>
        <Divider/>
        {customComponents}
    </DevToolsDrawer>
}

export default Menu as React.ComponentType<any>;