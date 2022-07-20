import {getFullUrl, isTestEnv} from "../config.service";
import {mockSendingData} from "../mock/sendMock.service";


export function deleteData(endpointUrl:string,options?:any){
    if (isTestEnv()) return mockSendingData(endpointUrl,{});
    return fetch(getFullUrl(endpointUrl),{
        method: 'DELETE',
        credentials: 'include',
        ...options
    })
}