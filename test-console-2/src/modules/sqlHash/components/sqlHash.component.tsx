import React, {useEffect, useState} from "react";
import {getSqlHash} from "../services/getSqlHash.service";
import {CircularProgress, Tooltip, Typography} from "@mui/material";
import {HashState, HashStatus} from "../types/hashState.type";
import {StatusIcon} from "./statusIcon.component";
import {CSSProperties} from "@mui/styles";
import {HtmlTooltip} from "./tooltip.component";
import StatusMessage from "./statusMessage.component";

export function SqlHash({functionName,expectedHash}:{functionName,expectedHash}) {
    let [state,setHashState] = useState<HashState>({status:HashStatus.loading,hash:''})
    useEffect(() => {
        getSqlHash(functionName, expectedHash).then(setHashState)
    }, []);
    if (state.status===HashStatus.loading) return <CircularProgress/>
    return <HtmlTooltip title={<StatusMessage status={state.status} expectedHash={state.hash} currentHash={expectedHash}/>}>
        <Typography><StatusIcon status={state.status}/> {functionName}</Typography>
    </HtmlTooltip>;
}