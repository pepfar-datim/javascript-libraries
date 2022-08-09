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

export function BuildTag({buildDate}:{buildDate?:string}){
    return <React.Fragment>
        <Typography style={styles.label}>Build Date</Typography>
        <Typography style={styles.value}>{buildDate}</Typography>
    </React.Fragment>

}