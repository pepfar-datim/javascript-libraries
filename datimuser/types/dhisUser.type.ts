import {idName} from "./idName.type";

export type DhisUser = {
    userGroups: idName[];
    userCredentials: {
        userRoles: idName[];
        disabled?: boolean;
    }
}