"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableWindowLocation = void 0;
function disableWindowLocation() {
    delete window.location;
    window.location = {
        ancestorOrigins: undefined,
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        port: "",
        protocol: "",
        replace: function (url) {
        },
        search: "",
        toString: function () {
            return "";
        },
        reload: function (forcedReload) {
        },
        assign: jest.fn()
    };
}
exports.disableWindowLocation = disableWindowLocation;
//# sourceMappingURL=disableWindowLocation.utils.js.map