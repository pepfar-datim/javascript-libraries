import {getPackageMeta} from "../lib/services/getPackageMeta.service";
import {srcCopy} from "../lib/services/fullCopy.service";

console.log(`CWD is ${process.cwd()}`)

let path:string = process.argv[2];
let packageMeta = getPackageMeta(path)
console.log(`Copying src folder from: ${path}`);
srcCopy(packageMeta).then(()=>{
    console.log(`Copy done`)
})

