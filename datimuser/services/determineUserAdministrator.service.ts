import {idName} from "../types/idName.type";

export function determineUserAdministrator(userGroups:idName[]):boolean{
    return userGroups.some(g=>g.name.toLowerCase().indexOf('user administrators')>-1)
}