import { getPackageMeta } from "../lib/services/getPackageMeta.service";
import { fullCopy } from "../lib/services/fullCopy.service";
console.log("CWD is ".concat(process.cwd()));
var path = process.argv[2];
var packageMeta = getPackageMeta(path);
console.log("Importing npm package: ".concat(packageMeta.name.localName, " from: ").concat(path));
fullCopy(packageMeta).then(function () {
    console.log("Copy done");
});
//# sourceMappingURL=fullCopy.js.map