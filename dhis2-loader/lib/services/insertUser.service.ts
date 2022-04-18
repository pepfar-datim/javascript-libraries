import {postJson} from "./httpRequest.service";
import {Response} from "node-fetch";
import {error, success} from "./print";
import {User} from "../types/user.type";
import {debuglog} from "util";
import {ApiResponse} from "../types/api.types";


export async function insertUser(baseUrl:string, authorization: string,userObject:User){
    userObject.userCredentials.password = 'Cypress1!'
    let response:ApiResponse = await postJson(`https://${baseUrl}/api/users`, userObject, authorization);
    let user = userObject.userCredentials.username;
    if (response.success) success(`User ${user} inserted. Response: ${response.rawResponse.status} ${response.rawResponse.statusText}`)
    else error(`${response.errorMessage}`)
}