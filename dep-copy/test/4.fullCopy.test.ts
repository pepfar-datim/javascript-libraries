import {fullCopy} from "../lib/services/fullCopy.service";
import {getPackageMeta} from "../lib/services/getPackageMeta.service";
import {rmSync,accessSync,existsSync} from "fs";

const orgPath = 'node_modules/@our-org';

type TestCase = {
    path: string,
    exist: boolean,
    name:string
}

const testCases:TestCase[] = [{
    path: `${orgPath}/testlib`,
    exist: true,
    name: 'lib path'
},{
    path: `${orgPath}/testlib/node_modules/internalDep1`,
    exist: true,
    name: 'internal dependency'
},{
    path: `${orgPath}/testlib/node_modules/peerDep1`,
    exist: false,
    name: 'unscoped peer dep'
},{
    path: `${orgPath}/testlib/node_modules/@peerOrg/peerDep2`,
    exist: false,
    name: 'scoped peer dep'
}];

describe(`4 > Full copy`, ()=>{
    beforeAll(async ()=>{
        rmSync(orgPath, {recursive:true, force:true})
        let packageMeta = await getPackageMeta("test/data")
        await fullCopy(packageMeta);
    })
    testCases.forEach(({name,path,exist})=>{
        test(` 4 > fully copy > ${name} should ${exist?'exist':'not exist'}: ${path.replace('node_modules','')}`,()=> {
            expect(existsSync(path)).toBe(exist)
        });
    })
})