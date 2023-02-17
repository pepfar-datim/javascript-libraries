import { getLocalPath } from "./path.service";
import cpy from 'cpy';
export function fullCopy(_a) {
    var path = _a.path, name = _a.name, peerDependencies = _a.peerDependencies, devDependencies = _a.devDependencies;
    var umwantedDeps = [].concat(devDependencies, peerDependencies);
    return cpy(path + '/**/*', getLocalPath(name), {
        filter: function (file) { return !umwantedDeps.some(function (peerName) { return file.relativePath.includes("node_modules/".concat(peerName, "/")); }); }
    });
}
export function srcCopy(_a) {
    var path = _a.path, name = _a.name;
    return cpy(path + '/**/*', getLocalPath(name), {
        filter: function (file) { return !file.relativePath.includes("node_modules/"); }
    });
}
//# sourceMappingURL=fullCopy.service.js.map