import {getJson,getText} from "./services/get.service";
import {registerProd, registerTest, setTestUsername} from "./services/config.service";
import {mock} from "./services/mock/mock.service";
import {getCache} from "./services/cache/cache.get.service";


export const datimApi = {
    getJson,
    getText,
    registerProd,
    registerTest,
    mock,
    initTestCache:getCache.initTestCache,
    setTestUsername,
}