import {Divider, Drawer, List, ListItem, ListItemText, styled, Typography, withStyles} from "@mui/material";
import React, {CSSProperties, ReactElement} from "react";
import {Logo} from "./logo";
import {BuildTag} from "./buildTag";
import {CustomMethod} from "../types/testConsole.types";

const styles = {
    root: {
        '& .MuiPaper-root':{
            // paddingTop: '63px',
            minWidth: 180,
            maxWidth: 700,
        }
    },
    list: {
        padding: '0px!important'
    },
    listItem: {
        padding: '0px!important'
    }

}

function Menu({open, customMethods, onClose, buildDate, customComponents}:{
    open:boolean,
    buildDate:string,
    customMethods:CustomMethod[],
    customComponents?: ReactElement|ReactElement[],
    onClose:()=>void,
}){
    return <Drawer open={open} anchor='right' onClose={onClose} sx={styles.root}>
        <Logo/>
        <Divider/>
        <BuildTag buildDate={buildDate}/>
        <Divider/>
        <Typography>Custom Functions</Typography>
        <List dense={true} sx={styles.list}>
            {customMethods.map(({name,method}:CustomMethod,i:number)=><ListItem key={name} onClick={method} sx={styles.listItem}><ListItemText>{i+1}. {name}</ListItemText></ListItem>)}
        </List>
        <Divider/>
        {customComponents}
    </Drawer>
}

export default Menu as React.ComponentType<any>;