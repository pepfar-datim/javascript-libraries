import React, {ReactElement, useState} from "react";
import {IconButton, Snackbar} from "@mui/material";
import {Message, ShowMessage} from "../types/message.type";
import {Close} from "@mui/icons-material";


export function MessageProvider({children}:{children:any}) {
    let [message,setMessage]:[Message|null,ShowMessage] = useState<Message|null>(null)
    return <>
        {children(setMessage)}
        <Snackbar
            open={!!message}
            autoHideDuration={5000}
            onClose={()=>setMessage(null)}
            message={message?.text}
            anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
            action={
                <IconButton
                    size="small"
                    onClick={()=>setMessage(null)}
                    color={'inherit'}
                >
                    <Close fontSize="small" />
                </IconButton>
            }
        />
    </>;
}