import {sendJson} from "./httpRequest.service";
import {error, info, success} from "./print";
import {User} from "../types/user.type";
import {ApiResponse, ErrorType, HttpMethod} from "../types/api.types";

export enum Operation {
    create,
    update
}

type OperationMeta = {
    method:string,
    url:string,
    beforeMessage:string,
    afterMessage:string
}

function getOperationMeta(operation:Operation, userObject:User):OperationMeta{
    let user = userObject.userCredentials.username;
    switch (operation){
        case Operation.create:
            return {method:HttpMethod.post,url:'/users', beforeMessage: `Creating user ${user}`, afterMessage: `User ${user} created`}
        case Operation.update:
            return {method:HttpMethod.put,url:`/users/${userObject.id}.json`, beforeMessage: `Updating user ${user}`, afterMessage: `User ${user} updated`}
    }
}

export async function createUpdateUser(operation:Operation, baseUrl:string, authorization: string, userObject:User):Promise<void>{
    let {method, url, beforeMessage,afterMessage}:OperationMeta = getOperationMeta(operation,userObject);
    info(beforeMessage)
    userObject.userCredentials.password = 'Cypress1!'
    let response:ApiResponse = await sendJson(method,`https://${baseUrl}/api${url}`, userObject, authorization);
    if (response.success) return success(`${afterMessage} Response: ${response.rawResponse.status} ${response.rawResponse.statusText}`)
    else error(response.errorMessage||'')
    if (response.errorType===ErrorType.alreadyExists&&operation===Operation.create) return createUpdateUser(Operation.update,baseUrl,authorization,userObject);
}