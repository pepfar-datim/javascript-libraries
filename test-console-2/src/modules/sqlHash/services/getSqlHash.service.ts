import {getJson} from "@pepfar-react-lib/datim-api";
import {HashState, HashStatus} from "../types/hashState.type";

export async function getSqlHash(functionName:string, expectedHash:string):Promise<HashState>{
    let hash:string = await getJson(`/sqlViews/FCZSGIu9QuA/data?var=function:${functionName}`)
        .then(r=>r.listGrid.rows[0][0]);
    return {
        hash,
        status: hash===expectedHash?HashStatus.match:HashStatus.error
    }
}