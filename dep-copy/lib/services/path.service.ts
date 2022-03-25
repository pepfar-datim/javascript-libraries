import {PackageName} from "../types/packageName.type";

export const getLocalPath = ({nameSpace,localName}:PackageName)=>`node_modules/${nameSpace}/${localName}`;
export const getRemotePath = (rootPath:string, packageName:PackageName)=>`${rootPath}/${packageName.localName}`;