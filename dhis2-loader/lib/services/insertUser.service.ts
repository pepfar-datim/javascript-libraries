import {postJson} from "./httpRequest.service";

export async function insertUser(baseUrl:string, authorization: string,userObject:any){
    return postJson(`https://${baseUrl}/api/users`,userObject,authorization);
}