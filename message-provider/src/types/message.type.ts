export enum MessageType{
    success='success',
    error='error'
}

export type Message = {
    text:string,
    type:MessageType
}

export type ShowMessage = (message:Message|null)=>void;