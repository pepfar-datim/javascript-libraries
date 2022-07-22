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

export function BuildTag({buildName, buildDate}:{buildName?:string, buildDate: string}){
    return <React.Fragment>
        {buildName &&<>
            <Typography style={styles.label}>Build Name</Typography>
            <Typography style={styles.value}>{buildName}</Typography>
        </>}
        {/*<Typography variant='caption' style={styles.label}>Build Date</Typography>*/}
        {/*<List>*/}
        {/*    <ListItem>*/}
        {/*        <Typography variant='caption'>{buildDate}</Typography>*/}
        {/*    </ListItem>*/}
        {/*</List>*/}
    </React.Fragment>

}