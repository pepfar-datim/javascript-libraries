import { getPackageMeta } from "../lib/services/getPackageMeta.service";
import { fullCopy } from "../lib/services/fullCopy.service";
import { watchFiles } from "../lib/services/watchFiles.service";
console.log("CWD is ".concat(process.cwd()));
var path = process.argv[2];
var packageMeta = getPackageMeta(path);
console.log("Importing npm package: ".concat(packageMeta.name.localName, " from: ").concat(path));
fullCopy(packageMeta).then(function () {
    console.log("Initial copy done");
    watchFiles(packageMeta);
});
//# sourceMappingURL=dep-copy.js.map