import {PackageJson, PackageMeta, PackageName} from "../lib/types/package.type";
import {getPackageMeta} from "../lib/services/getPackageMeta.service";
import {fullCopy} from "../lib/services/fullCopy.service";
import {watchFiles} from "../lib/services/watchFiles.service";

console.log(`CWD is ${process.cwd()}`)

let path:string = process.argv[2];
getPackageMeta(path).then(async (packageMeta:PackageMeta)=>{
    console.log(`Importing npm package: ${packageMeta.name.localName} from: ${path}`);
    await fullCopy(packageMeta);
    watchFiles(packageMeta);
})

