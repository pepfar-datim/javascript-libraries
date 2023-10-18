import {PackageMeta, PackageJson, PackageName} from "../lib/types/package.type";
import {getPackageMeta} from "../lib/services/getPackageMeta.service";

test('3 > getPackageJson',async ()=>{
    let packageInfo:PackageMeta = await getPackageMeta('test/data');
    expect(packageInfo.name.localName).toBe('testlib');
    expect(packageInfo.name.nameSpace).toBe('our-org')
    expect(packageInfo.path).toBe('test/data')
    expect(packageInfo.peerDependencies).toStrictEqual(["peerDep1","@peerOrg/peerDep2"])
})