import {getLocalPath} from "./path.service";
import {PackageMeta} from "../types/package.type";
import cpy from 'cpy';

export function fullCopy({path,name,peerDependencies, devDependencies}:PackageMeta):Promise<any>{
    let umwantedDeps:string[] = [].concat(devDependencies,peerDependencies)
    return cpy(path+'/**/*', getLocalPath(name), {
        filter: file => !umwantedDeps.some((peerName)=>file.relativePath.includes(`node_modules/${peerName}/`))
    });
}

export function srcCopy({path,name}:PackageMeta):Promise<any>{
    return cpy(path+'/**/*', getLocalPath(name), {
        filter: file => !file.relativePath.includes(`node_modules/`)
    });
}