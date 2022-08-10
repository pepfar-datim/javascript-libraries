import {getLocalPath} from "./path.service";
import {PackageMeta} from "../types/package.type";
import cpx from "cpx";

function setupReporter(copyHandle:any,path:string){
    copyHandle.on('copy',(e:any)=>console.log(e.srcPath.replace(path,'')));
}

export async function watchFiles({path,name}:PackageMeta){
    setupReporter(cpx.watch(path+'/**/*', getLocalPath(name),{initialCopy:false}),path)
}