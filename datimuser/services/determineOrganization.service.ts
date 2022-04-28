import {UserType} from "../types/userType.type";
import {userTypeReRules} from "../const/regExpMatchers.const";
import {idName} from "../types/idName.type";

export function determineOrganization(userType:UserType, userGroups:idName[]):string{
    if ([UserType.Partner, UserType.Agency, UserType.GlobalAgency, UserType.GlobalPartner].indexOf(userType)===-1) return null;
    let rule = userTypeReRules[userType];

    let re = new RegExp(rule);
    let group = userGroups.map(g=>g.name).filter(g=>re.test(g))[0];
    if (userType===UserType.Partner){
        return group.replace(/^OU .+ Partner .+ users - /,'');
    }
    if (userType===UserType.GlobalPartner){
        return group.replace(/^Global Partner .+ users - /,'');
    }
    if (userType===UserType.Agency){
        return group.replace(/^OU .+ Agency /,'').replace(/ users$/,'');
    }
    if (userType===UserType.GlobalAgency){
        return group.replace(/^Global Agency /,'').replace(/ users$/,'');
    }
    return group;
}