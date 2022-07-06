import {MockService} from "./mock.service";
import {ApiResponse} from "../../types/http.types";

let sendMockService = new MockService();
type SendMockRecord = {
    response:any,
    resolve:(payload:any)=>void,
    success
}

export function registerSendMock(url:string, response:any, success:boolean=true):Promise<any>{
    return new Promise((resolve)=>{
        sendMockService.registerMockedResponse(url,{response,resolve,success});
    });
}

export function mockSendingData(url:string,payload:any):Promise<ApiResponse>{
    if (!isSendMocked(url)) throw new Error(`POST/PUT mock not in place`);
    let {resolve, response,success}:SendMockRecord = sendMockService.getMockedResponse(url);
    resolve(payload);
    return Promise.resolve({responseBody:response,success,rawResponse:null});
}

export function isSendMocked(url:string):boolean{
    return sendMockService.isMocked(url);
}