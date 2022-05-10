import {isTestEnv_lowLevel} from "./isTestEnv.service";

export function getBaseUrl(){
    if (!isTestEnv_lowLevel()) return "../../../";
    let baseUrl = process.env.BASE_URL;
    if (!baseUrl) throw new Error(`Please specify DHIS2 base url as $BASE_URL in format: 'https://dev.datim.org/`)
    return baseUrl;
}