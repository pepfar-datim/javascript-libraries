import {UserType} from "../types/userType.type";

export function getAllUserTypes():UserType[]{
    return Object.entries(UserType).map(e=>e[1] as UserType);
}

export function getAppUserTypes():UserType[]{
    return getAllUserTypes().filter(t=>![UserType.unknown, UserType.superAdmin].includes(t))
}