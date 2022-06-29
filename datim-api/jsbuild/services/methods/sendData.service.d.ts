import { ApiResponse } from "../../types/http.types";
export declare function postJson(url: string, body: any): Promise<ApiResponse>;
export declare function putJson(url: string, body: any): Promise<ApiResponse>;
export declare function patchJson(url: string, body: any): Promise<ApiResponse>;
export declare function postText(url: string, body: any): Promise<ApiResponse>;
export declare function postEmpty(url: string): Promise<ApiResponse>;
