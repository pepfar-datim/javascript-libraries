import {getLocalPath} from "./path.service";
import {PackageName} from "../types/package.type";
const cpx = require("cpx");

export async function watchFiles(path:string, packageName:PackageName){
    return new Promise((resolve)=>{
        cpx.watch(path+'/**/*', getLocalPath(packageName),{initialCopy:false});
    })
}