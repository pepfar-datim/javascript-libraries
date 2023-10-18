export function splitPackageName(fullName) {
    var tokens = fullName.split('/');
    var nameSpace = tokens[0].replace('@', '');
    return { nameSpace: nameSpace, localName: tokens[1] };
}
//# sourceMappingURL=getPackageName.service.js.map