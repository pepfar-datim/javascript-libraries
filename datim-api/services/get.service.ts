import {getFullUrl} from "./register.service";

export function getJson(endpointUrl:string,options?:RequestInit):Promise<any>{
    return fetch(getFullUrl(endpointUrl),{credentials: 'include', ...options}).then(r=>r.json())
}