import {idName} from "../types/idName.type";

export function isSuperUser(userRoles:idName[]):boolean{
    return userRoles.map(({name})=>name).includes('Superuser ALL authorities');
}