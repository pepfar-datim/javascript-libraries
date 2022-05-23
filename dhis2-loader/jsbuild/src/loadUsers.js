import { createUpdateUser, Operation } from "../lib/services/createUser.service";
import { info } from "../lib/services/print";
export function loadUsers(users, baseUrl, authorization) {
    info("Inserting ".concat(users.length, " users. baseUrl: ").concat(baseUrl, " authorization: ").concat(authorization, "\n"));
    users.forEach(function (user) { return createUpdateUser(Operation.create, baseUrl, authorization, user); });
}
//# sourceMappingURL=loadUsers.js.map