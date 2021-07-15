import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "chen7gx.my.my";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCalim {
    creator: string;
    proof: string;
}
export interface MsgCreateCalimResponse {
    id: number;
}
export interface MsgUpdateCalim {
    creator: string;
    id: number;
    proof: string;
}
export interface MsgUpdateCalimResponse {
}
export interface MsgDeleteCalim {
    creator: string;
    id: number;
}
export interface MsgDeleteCalimResponse {
}
export declare const MsgCreateCalim: {
    encode(message: MsgCreateCalim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCalim;
    fromJSON(object: any): MsgCreateCalim;
    toJSON(message: MsgCreateCalim): unknown;
    fromPartial(object: DeepPartial<MsgCreateCalim>): MsgCreateCalim;
};
export declare const MsgCreateCalimResponse: {
    encode(message: MsgCreateCalimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCalimResponse;
    fromJSON(object: any): MsgCreateCalimResponse;
    toJSON(message: MsgCreateCalimResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCalimResponse>): MsgCreateCalimResponse;
};
export declare const MsgUpdateCalim: {
    encode(message: MsgUpdateCalim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCalim;
    fromJSON(object: any): MsgUpdateCalim;
    toJSON(message: MsgUpdateCalim): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCalim>): MsgUpdateCalim;
};
export declare const MsgUpdateCalimResponse: {
    encode(_: MsgUpdateCalimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCalimResponse;
    fromJSON(_: any): MsgUpdateCalimResponse;
    toJSON(_: MsgUpdateCalimResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCalimResponse>): MsgUpdateCalimResponse;
};
export declare const MsgDeleteCalim: {
    encode(message: MsgDeleteCalim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCalim;
    fromJSON(object: any): MsgDeleteCalim;
    toJSON(message: MsgDeleteCalim): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCalim>): MsgDeleteCalim;
};
export declare const MsgDeleteCalimResponse: {
    encode(_: MsgDeleteCalimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCalimResponse;
    fromJSON(_: any): MsgDeleteCalimResponse;
    toJSON(_: MsgDeleteCalimResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCalimResponse>): MsgDeleteCalimResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateCalim(request: MsgCreateCalim): Promise<MsgCreateCalimResponse>;
    UpdateCalim(request: MsgUpdateCalim): Promise<MsgUpdateCalimResponse>;
    DeleteCalim(request: MsgDeleteCalim): Promise<MsgDeleteCalimResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCalim(request: MsgCreateCalim): Promise<MsgCreateCalimResponse>;
    UpdateCalim(request: MsgUpdateCalim): Promise<MsgUpdateCalimResponse>;
    DeleteCalim(request: MsgDeleteCalim): Promise<MsgDeleteCalimResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
