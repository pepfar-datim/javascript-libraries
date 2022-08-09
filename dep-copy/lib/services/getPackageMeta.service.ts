import {PackageMeta, PackageJson} from "../types/package.type";
import {splitPackageName} from "./getPackageName.service";
import {readFileSync} from "fs";

export function getPackageMeta(path:string):PackageMeta{
    let packageJson:PackageJson = JSON.parse(readFileSync(path+'/package.json').toString())
    return {
        name: splitPackageName(packageJson.name),
        peerDependencies: Object.keys(packageJson.peerDependencies),
        path
    }
}