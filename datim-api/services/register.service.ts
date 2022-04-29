import {Credentials} from "../types/credentials.type";


export let credentials:Credentials;

export function register(baseUrl: string,authorization?:string){
    credentials = {baseUrl,authorization};
}

export function getFullUrl(endpointUrl:string){
    return `${credentials.baseUrl}api${endpointUrl}`;
}