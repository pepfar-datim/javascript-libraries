import {PackageMeta, PackageJson} from "../types/package.type";
import {splitPackageName} from "./getPackageName.service";
const jsonfile = require("jsonfile");

export async function getPackageMeta(path:string):Promise<PackageMeta>{
    let packageJson:PackageJson = await jsonfile.readFile(path+'/package.json');
    return {
        name: splitPackageName(packageJson.name),
        peerDependencies: Object.keys(packageJson.peerDependencies),
        path
    }
}