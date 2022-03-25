import {getLocalPath} from "./path.service";
const cpx = require("cpx");

export async function watchFiles(path:string, packageName:PackageName):Promise<void>{
    return new Promise((resolve)=>{
        cpx.watch(path+'/**/*', getLocalPath(packageName),{initialCopy:false});
    })
}