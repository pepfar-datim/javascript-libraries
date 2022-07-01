export declare enum Environment {
    test = "test",
    production = "production",
    development = "development"
}
export declare type Config = {
    environment: Environment;
    baseUrl: string;
    testUsername: string;
    authorization: string;
};
