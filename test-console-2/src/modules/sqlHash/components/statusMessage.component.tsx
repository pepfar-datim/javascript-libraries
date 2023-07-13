import React from "react";
import {HashStatus} from "../types/hashState.type";
import {Divider, Typography} from "@mui/material";
import {styled} from "@mui/styles";

const TitleDivider = styled(Divider)({
    marginTop: '7px!important'
});

export const colors = {
    success: '#008600',
    error: '#bd0000'
}

const styles = {
    title: {
        fontSize: 15,
    },
    message: {
        fontSize: 14,
        color: 'rgb(84, 84, 84)'
    }
}

export default function StatusMessage({status,expectedHash,currentHash}:{
    status: HashStatus,
    expectedHash:string,
    currentHash:string,
}) {
    switch (status){
        case HashStatus.match:
            return <>
                <Typography style={{color: colors.success, marginTop: '5px!important'}}>Success</Typography>
                <TitleDivider style={{backgroundColor:colors.success}}/>
                <Typography style={styles.message}>The expected and actual hash match: {expectedHash}</Typography>
            </>
        case HashStatus.error:
            return <>
                <Typography style={{color: colors.error, marginTop: '5px!important'}}>Error</Typography>
                <TitleDivider style={{backgroundColor:colors.error}}/>
                <Typography style={styles.message}>The expected hash ({expectedHash}) and actual hash ({currentHash}) do not match</Typography>
            </>
    }
    return <div>loading</div>;
}