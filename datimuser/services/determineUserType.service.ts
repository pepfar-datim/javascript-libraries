import {idName} from "../types/idName.type";
import {UserType} from "../types/userType.type";
import {userTypeReRules} from "../const/regExpMatchers.const";
import {getAllUserTypes, getAppUserTypes} from "./getTypes.service";

export function isUserType(userGroups:idName[], type:UserType):boolean{
    return userGroups.some(userGroup=>{
        let userGroupName = userGroup.name;
        let re = new RegExp(userTypeReRules[type]);
        return re.test(userGroupName);
    });
}

export function determineUserType(userGroups:idName[]):UserType{
    let foundTypes:UserType[]=[];
    getAppUserTypes().forEach((userType:UserType)=>{
        if (isUserType(userGroups, userType)) foundTypes.push(userType);
    });
    const userTypes = getAllUserTypes();
    foundTypes.sort((t1,t2)=>userTypes.indexOf(t2)-userTypes.indexOf(t1));
    if (foundTypes.length>1) console.log(`Multiple User Types found ${foundTypes} ${userGroups.map(g=>g.name)}`);
    if (foundTypes.length===0) return UserType.unknown;
    return foundTypes[0];
}