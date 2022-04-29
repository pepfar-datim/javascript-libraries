import {credentials, getFullUrl} from "./register.service";

const mergeOptions = (options:RequestInit,acceptType:string)=>Object.assign({headers:{Accept: acceptType}},options);

export function getJson(endpointUrl:string,options?:RequestInit):Promise<any>{
    return getData(endpointUrl,mergeOptions(options,'application/json')).then(r=>r.json());
}

export function getText(endpointUrl:string, options?:RequestInit):Promise<any>{
    return getData(endpointUrl,mergeOptions(options,'text/plain')).then(r=>r.text());
}

function getData(endpointUrl, options?:RequestInit){
    if (credentials.authorization) options.headers['authorization'] = credentials.authorization;
    return fetch(getFullUrl(endpointUrl),{credentials: 'include', ...options});
}