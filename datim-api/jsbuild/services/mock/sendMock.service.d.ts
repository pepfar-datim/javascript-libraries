import { ApiResponse } from "../../types/http.types";
export declare function registerSendMock(url: string, response: any): Promise<any>;
export declare function mockSendingData(url: string, payload: any): Promise<ApiResponse>;
export declare function isSendMocked(url: string): boolean;
