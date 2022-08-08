import {getFullUrl, isTestEnv} from "../config.service";
import {mockSendingData} from "../mock/sendMock.service";
import {inspectResponse} from "./inspectResponse.service";
import {ApiResponse} from "../../types/http.types";

export function deleteData(endpointUrl:string,options?:any):Promise<ApiResponse>{
    if (isTestEnv()) return mockSendingData(endpointUrl,{});
    return fetch(getFullUrl(endpointUrl),{
        method: 'DELETE',
        credentials: 'include',
        ...options
    }).then(inspectResponse)
}