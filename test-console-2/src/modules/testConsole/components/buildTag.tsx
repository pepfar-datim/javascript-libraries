import React from "react";
import {Chip, List, ListItem, Typography} from "@mui/material";

const styles = {
    label:{
        fontWeight: 500,
        fontSize: '0.75rem'
    },
    value:{
        fontSize: '0.75rem'
    }
}

export function BuildTag({buildName}:{buildName?:string}){
    return <React.Fragment>
        <Typography style={styles.label}>Build Name</Typography>
        <Typography style={styles.value}>{buildName}</Typography>
    </React.Fragment>

}