import React from "react";
import {HashStatus} from "../types/hashState.type";
import {Cancel, CheckCircle} from "@mui/icons-material";

const colors = {
    success: '#008600',
    error: '#bd0000'
}

const style=(status:HashStatus)=>({
    verticalAlign: 'middle',
    fontSize: 'small',
    color:status===HashStatus.match?colors.success:colors.error
})

export function StatusIcon({status}:{status:HashStatus}) {
    switch (status){
        case HashStatus.match:
            return <CheckCircle sx={style(status)}/>
        case HashStatus.error:
            return <Cancel sx={style(status)}/>
        default: return null;
    }
}