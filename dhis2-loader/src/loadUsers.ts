import {insertUser} from "../lib/services/insertUser.service";

export function loadUsers(users:any[],baseUrl:string,authorization:string){
    users.forEach((user)=>insertUser(baseUrl,authorization,user))
}