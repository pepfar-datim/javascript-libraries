import { splitPackageName } from "./getPackageName.service";
import { readFileSync } from "fs";
export function getPackageMeta(path) {
    var packageJson = JSON.parse(readFileSync(path + '/package.json').toString());
    return {
        name: splitPackageName(packageJson.name),
        peerDependencies: Object.keys(packageJson.peerDependencies),
        path: path
    };
}
//# sourceMappingURL=getPackageMeta.service.js.map