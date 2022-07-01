"use strict";
exports.__esModule = true;
exports.loadUsers = void 0;
var createUser_service_1 = require("../lib/services/createUser.service");
var print_1 = require("../lib/services/print");
function loadUsers(users, baseUrl, authorization) {
    (0, print_1.info)("Inserting ".concat(users.length, " users. baseUrl: ").concat(baseUrl, " authorization: ").concat(authorization, "\n"));
    users.forEach(function (user) { return (0, createUser_service_1.createUpdateUser)(createUser_service_1.Operation.create, baseUrl, authorization, user); });
}
exports.loadUsers = loadUsers;
//# sourceMappingURL=loadUsers.js.map