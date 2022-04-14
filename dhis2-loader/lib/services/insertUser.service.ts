import {postJson} from "./httpRequest.service";
import {Response} from "node-fetch";
import {error, success} from "./print";
import {User} from "../types/user.type";
import {debuglog} from "util";

export async function insertUser(baseUrl:string, authorization: string,userObject:User){
    let response:Response = await postJson(`https://${baseUrl}/api/users`,userObject,authorization);
    let user = userObject.userCredentials.username;
    if (response.ok&&!response.redirected) success(`User ${user} inserted`)
    else error(`ERROR: Failed to insert user ${user}`)
}