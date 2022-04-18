import {sendJson} from "./httpRequest.service";
import {error, info, success} from "./print";
import {User} from "../types/user.type";
import {ApiResponse, ErrorType, HttpMethod} from "../types/api.types";


export async function insertUser(method:HttpMethod, baseUrl:string, authorization: string,userObject:User):Promise<void>{
    let user = userObject.userCredentials.username;
    info(`${method===HttpMethod.post?'Inserting':'Updating'} user ${user}`)
    userObject.userCredentials.password = 'Cypress1!'
    let response:ApiResponse = await sendJson(method,`https://${baseUrl}/api/users`, userObject, authorization);
    if (response.success) return success(`User ${user} inserted. Response: ${response.rawResponse.status} ${response.rawResponse.statusText}`)
    if (response.errorType===ErrorType.alreadyExists&&method===HttpMethod.post) return insertUser(HttpMethod.put,baseUrl,authorization,userObject);
    error(`${response.errorMessage}`)
}