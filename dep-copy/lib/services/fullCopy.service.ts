import {getLocalPath} from "./path.service";
import {PackageMeta} from "../types/package.type";
import cpy from 'cpy';

export function fullCopy({path,name,peerDependencies}:PackageMeta):Promise<any>{
    return cpy(path+'/**/*', getLocalPath(name), {
        filter: file => !peerDependencies.some((peerName)=>file.relativePath.includes(peerName))
    });
}