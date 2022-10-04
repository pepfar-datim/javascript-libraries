import React, {ReactElement, useState} from "react";
import {Alert, IconButton, Snackbar} from "@mui/material";
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
            anchorOrigin={{ vertical:'bottom', horizontal:'center' }}>

                <Alert onClose={()=>setMessage(null)} severity={message?.type}>
                    {message?.text}
                </Alert>

        </Snackbar>
    </>;
}