import {insertUser} from "../lib/services/insertUser.service";
import {User} from "../lib/types/user.type";

export function loadUsers(users:User[],baseUrl:string,authorization:string){
    users.forEach((user)=>insertUser(baseUrl,authorization,user))
}