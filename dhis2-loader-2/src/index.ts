import {allowCors} from "./bin/allowCors.bin";
import {editDataStore} from "./bin/editDataStore.bin";
import {insertUser} from "./bin/insertUser.bin";
import { getJson } from "./modules/http/services/getJson.service";
import { postEmpty } from "./modules/http/services/postEmpty.service";
import { patchJson, postJson } from "./modules/http/services/sendJson.service";
import {ServerConfig} from "./types/server.type";


export {
    ServerConfig,
    insertUser,
    allowCors,
    editDataStore,
    patchJson,
    postJson,
    postEmpty,
    getJson
}