import { rmdir } from "fs";
import { getLocalPath } from "./path.service";
import { splitPackageName } from "./getPackageName.service";
export function removePeerDependencies(packageJson) {
    if (!packageJson.peerDependencies)
        return console.log("No peer dependencies found");
    var peerDependencies = Object.keys(packageJson.peerDependencies);
    peerDependencies.forEach(function (depName) {
        var packagePath = getLocalPath(splitPackageName(packageJson.name)) + '/node_modules/' + depName;
        rmdir(packagePath, { recursive: true }, function () {
            console.log("Deleted ".concat(packagePath));
        });
    });
}
//# sourceMappingURL=removePeerDependencies.service.js.map