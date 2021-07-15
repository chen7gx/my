/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Calim } from '../my/calim';
export const protobufPackage = 'chen7gx.my.my';
const baseGenesisState = { calimCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.calimList) {
            Calim.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.calimCount !== 0) {
            writer.uint32(16).uint64(message.calimCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.calimList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calimList.push(Calim.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.calimCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.calimList = [];
        if (object.calimList !== undefined && object.calimList !== null) {
            for (const e of object.calimList) {
                message.calimList.push(Calim.fromJSON(e));
            }
        }
        if (object.calimCount !== undefined && object.calimCount !== null) {
            message.calimCount = Number(object.calimCount);
        }
        else {
            message.calimCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.calimList) {
            obj.calimList = message.calimList.map((e) => (e ? Calim.toJSON(e) : undefined));
        }
        else {
            obj.calimList = [];
        }
        message.calimCount !== undefined && (obj.calimCount = message.calimCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.calimList = [];
        if (object.calimList !== undefined && object.calimList !== null) {
            for (const e of object.calimList) {
                message.calimList.push(Calim.fromPartial(e));
            }
        }
        if (object.calimCount !== undefined && object.calimCount !== null) {
            message.calimCount = object.calimCount;
        }
        else {
            message.calimCount = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
