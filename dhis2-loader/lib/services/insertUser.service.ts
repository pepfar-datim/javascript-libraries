import {postJson} from "./httpRequest.service";
import {Response} from "node-fetch";
import {error, success} from "./print";
import {User} from "../types/user.type";
import {debuglog} from "util";

export async function insertUser(baseUrl:string, authorization: string,userObject:User){
    userObject.userCredentials.password = 'Cypress1!'
    let response:Response = await postJson(`https://${baseUrl}/api/users`,userObject,authorization);
    let user = userObject.userCredentials.username;
    if (response.ok&&!response.redirected) success(`User ${user} inserted. Response: ${response.status} ${response.statusText}`)
    else error(`ERROR: Failed to insert user ${user}`)
}