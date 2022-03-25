import {PackageName} from "../types/packageName.type";

export function getPackageName(fullName:string):PackageName{
    let tokens = fullName.split('/');
    let nameSpace = tokens[0].replace('@','');
    return {nameSpace,localName:tokens[1]}
}