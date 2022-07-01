import {sendJson} from "../lib/services/httpRequest.service";
import {assembleUrl} from "../lib/services/assembleUrl.service";
import {error, success} from "../lib/services/print";
import {ApiResponse} from "@pepfar-react-lib/datim-api";
import {HttpMethod} from "@pepfar-react-lib/datim-api/build/commonjs";

let corsToEnable = ['http://localhost','http://localhost:3000'];

export async function allowCors(baseUrl:string,authorization:string){
    let response:ApiResponse = await sendJson(HttpMethod.post,assembleUrl(baseUrl,'/configuration/corsWhitelist'),corsToEnable,authorization)
    if (response.success) success(`CORS list updated @ ${baseUrl}`)
    else error(`Cannot update CORS @ ${baseUrl} / ${authorization}\n\t${response.errorMessage}`)
}