import {getFullUrl} from "../config.service";


export function deleteData(endpointUrl:string,options?:any){
    return fetch(getFullUrl(endpointUrl),{credentials: 'include', ...options})
}