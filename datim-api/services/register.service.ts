let baseUrl:string;
export function register(serverUrl: string){
    baseUrl = serverUrl;
}

export function getFullUrl(endpointUrl:string){
    return `${baseUrl}api${endpointUrl}`;
}