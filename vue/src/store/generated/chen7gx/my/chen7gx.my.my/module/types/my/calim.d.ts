import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "chen7gx.my.my";
export interface Calim {
    creator: string;
    id: number;
    proof: string;
}
export declare const Calim: {
    encode(message: Calim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Calim;
    fromJSON(object: any): Calim;
    toJSON(message: Calim): unknown;
    fromPartial(object: DeepPartial<Calim>): Calim;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
