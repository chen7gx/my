/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Calim } from '../my/calim'

export const protobufPackage = 'chen7gx.my.my'

/** GenesisState defines the my module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  calimList: Calim[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  calimCount: number
}

const baseGenesisState: object = { calimCount: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.calimList) {
      Calim.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.calimCount !== 0) {
      writer.uint32(16).uint64(message.calimCount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.calimList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.calimList.push(Calim.decode(reader, reader.uint32()))
          break
        case 2:
          message.calimCount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.calimList = []
    if (object.calimList !== undefined && object.calimList !== null) {
      for (const e of object.calimList) {
        message.calimList.push(Calim.fromJSON(e))
      }
    }
    if (object.calimCount !== undefined && object.calimCount !== null) {
      message.calimCount = Number(object.calimCount)
    } else {
      message.calimCount = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.calimList) {
      obj.calimList = message.calimList.map((e) => (e ? Calim.toJSON(e) : undefined))
    } else {
      obj.calimList = []
    }
    message.calimCount !== undefined && (obj.calimCount = message.calimCount)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.calimList = []
    if (object.calimList !== undefined && object.calimList !== null) {
      for (const e of object.calimList) {
        message.calimList.push(Calim.fromPartial(e))
      }
    }
    if (object.calimCount !== undefined && object.calimCount !== null) {
      message.calimCount = object.calimCount
    } else {
      message.calimCount = 0
    }
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
