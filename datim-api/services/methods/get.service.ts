import {config, getFullUrl} from "../config.service";
import {getMockedResponse, isMocked} from "../mock/getMock.serivce";
import {isTestEnv} from "../isTestEnv.service";
import {getCachedResponse, isResponseCached, saveResponseToCache} from "../cache/getCache.service";
import {ContentType} from "../../types/http.types";

const mergeOptions = (options:RequestInit,acceptType:string)=>Object.assign({headers:{Accept: acceptType}},options);

export async function getJson(endpointUrl:string,options?:RequestInit):Promise<any>{
    let response = await getData(endpointUrl,mergeOptions(options,ContentType.json)).then(r=>r.json());
    if (isTestEnv()&&!isMocked(endpointUrl)) saveResponseToCache(config.testUsername,endpointUrl,response);
    return response;
}

export function getText(endpointUrl:string, options?:RequestInit):Promise<any>{
    return getData(endpointUrl,mergeOptions(options,ContentType.text)).then(r=>r.text());
}

function getData(endpointUrl, options?:RequestInit):Promise<any>{
    if (isTestEnv()&&isMocked(endpointUrl)) return Promise.resolve(getMockedResponse(endpointUrl));
    if (isTestEnv()&&isResponseCached(config.testUsername,endpointUrl)) return Promise.resolve(getCachedResponse(config.testUsername,endpointUrl))
    if (config.authorization) options.headers['authorization'] = config.authorization;
    return fetch(getFullUrl(endpointUrl),{credentials: 'include', ...options})
}