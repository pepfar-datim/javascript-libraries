import {getJson} from "@pepfar-react-lib/datim-api";

export function checkSuperUser():Promise<boolean>{
    return getJson('/me?fields=userGroups[name],userCredentials[userRoles[name]]')
        .then(response=>response.userCredentials.userRoles.map(({name})=>name).includes('Superuser ALL authorities'));
}