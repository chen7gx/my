import { Reader, Writer } from 'protobufjs/minimal';
import { Calim } from '../my/calim';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "chen7gx.my.my";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetCalimRequest {
    id: number;
}
export interface QueryGetCalimResponse {
    Calim: Calim | undefined;
}
export interface QueryAllCalimRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCalimResponse {
    Calim: Calim[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetCalimRequest: {
    encode(message: QueryGetCalimRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCalimRequest;
    fromJSON(object: any): QueryGetCalimRequest;
    toJSON(message: QueryGetCalimRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCalimRequest>): QueryGetCalimRequest;
};
export declare const QueryGetCalimResponse: {
    encode(message: QueryGetCalimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCalimResponse;
    fromJSON(object: any): QueryGetCalimResponse;
    toJSON(message: QueryGetCalimResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCalimResponse>): QueryGetCalimResponse;
};
export declare const QueryAllCalimRequest: {
    encode(message: QueryAllCalimRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCalimRequest;
    fromJSON(object: any): QueryAllCalimRequest;
    toJSON(message: QueryAllCalimRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCalimRequest>): QueryAllCalimRequest;
};
export declare const QueryAllCalimResponse: {
    encode(message: QueryAllCalimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCalimResponse;
    fromJSON(object: any): QueryAllCalimResponse;
    toJSON(message: QueryAllCalimResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCalimResponse>): QueryAllCalimResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a calim by id. */
    Calim(request: QueryGetCalimRequest): Promise<QueryGetCalimResponse>;
    /** Queries a list of calim items. */
    CalimAll(request: QueryAllCalimRequest): Promise<QueryAllCalimResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Calim(request: QueryGetCalimRequest): Promise<QueryGetCalimResponse>;
    CalimAll(request: QueryAllCalimRequest): Promise<QueryAllCalimResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
