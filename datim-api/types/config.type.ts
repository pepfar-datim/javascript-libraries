export enum Environment {
    test='test',
    prod='prod'
}
export type Config = {
    baseUrl:string,
    testUsername:string,
    authorization:string,
    environment:Environment
}