export function assembleUrl(baseUrl:string,endpoint:string){
    return `https://${baseUrl}/api${endpoint}`;
}