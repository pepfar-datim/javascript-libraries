import { Config } from "../types/config.type";
export declare let config: Config;
export declare function register(environment: string, baseUrl?: string): void;
export declare function setTestUsername(testUsername: string, authorization: string): void;
export declare function getAuthorization(): string;
export declare function isTestEnv(): boolean;
export declare function getBaseUrl(): string;
export declare function getFullUrl(endpoint: string): string;
