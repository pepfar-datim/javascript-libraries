import {UserType} from "../types/userType.type";

export const userTypeReRules = {
    [UserType.Partner]: '^OU .+ Partner .+ users',
    [UserType.GlobalPartner]: '^Global Partner .+ users',
    [UserType.Agency]:  '^OU .+ Agency .+ users',
    [UserType.GlobalAgency]: '^Global Agency .+ users',
    [UserType.Global]: '^Global users',
    [UserType.InterAgency]: '^OU .+ Interagency users',
    [UserType.MOH]: '^OU .+ MOH users$',
    [UserType.System]: '^System users$'
};