import {config, getFullUrl} from "./config.service";
import {getMockedResponse, isMocked} from "./mock/mock.get.serivce";
import {isTestEnv} from "./isTestEnv.service";
import {getCache} from "./cache/cache.get.service";

const mergeOptions = (options:RequestInit,acceptType:string)=>Object.assign({headers:{Accept: acceptType}},options);

export async function getJson(endpointUrl:string,options?:RequestInit):Promise<any>{
    let response = await getData(endpointUrl,mergeOptions(options,'application/json')).then(r=>r.json());
    if (isTestEnv()&&!isMocked(endpointUrl)) getCache.saveResponseToCache(config.testUsername,endpointUrl,response);
    return response;
}

export function getText(endpointUrl:string, options?:RequestInit):Promise<any>{
    return getData(endpointUrl,mergeOptions(options,'text/plain')).then(r=>r.text());
}

function getData(endpointUrl, options?:RequestInit):Promise<any>{
    if (isTestEnv()&&isMocked(endpointUrl)) return Promise.resolve(getMockedResponse(endpointUrl));
    if (isTestEnv()&&getCache.isResponseCached(config.testUsername,endpointUrl)) return Promise.resolve(getCache.getCachedResponse(config.testUsername,endpointUrl))
    if (config.authorization) options.headers['authorization'] = config.authorization;
    return fetch(getFullUrl(endpointUrl),{credentials: 'include', ...options})
}