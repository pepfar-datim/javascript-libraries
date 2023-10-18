import { getPackageMeta } from "../lib/services/getPackageMeta.service";
import { srcCopy } from "../lib/services/fullCopy.service";
console.log("CWD is ".concat(process.cwd()));
var path = process.argv[2];
var packageMeta = getPackageMeta(path);
console.log("Copying src folder from: ".concat(path));
srcCopy(packageMeta).then(function () {
    console.log("Copy done");
});
//# sourceMappingURL=srcCopy.js.map