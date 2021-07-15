/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'chen7gx.my.my'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCalim {
  creator: string
  proof: string
}

export interface MsgCreateCalimResponse {
  id: number
}

export interface MsgUpdateCalim {
  creator: string
  id: number
  proof: string
}

export interface MsgUpdateCalimResponse {}

export interface MsgDeleteCalim {
  creator: string
  id: number
}

export interface MsgDeleteCalimResponse {}

const baseMsgCreateCalim: object = { creator: '', proof: '' }

export const MsgCreateCalim = {
  encode(message: MsgCreateCalim, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.proof !== '') {
      writer.uint32(18).string(message.proof)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCalim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCalim } as MsgCreateCalim
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.proof = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCalim {
    const message = { ...baseMsgCreateCalim } as MsgCreateCalim
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = String(object.proof)
    } else {
      message.proof = ''
    }
    return message
  },

  toJSON(message: MsgCreateCalim): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.proof !== undefined && (obj.proof = message.proof)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCalim>): MsgCreateCalim {
    const message = { ...baseMsgCreateCalim } as MsgCreateCalim
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof
    } else {
      message.proof = ''
    }
    return message
  }
}

const baseMsgCreateCalimResponse: object = { id: 0 }

export const MsgCreateCalimResponse = {
  encode(message: MsgCreateCalimResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCalimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCalimResponse } as MsgCreateCalimResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCalimResponse {
    const message = { ...baseMsgCreateCalimResponse } as MsgCreateCalimResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateCalimResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCalimResponse>): MsgCreateCalimResponse {
    const message = { ...baseMsgCreateCalimResponse } as MsgCreateCalimResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateCalim: object = { creator: '', id: 0, proof: '' }

export const MsgUpdateCalim = {
  encode(message: MsgUpdateCalim, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.proof !== '') {
      writer.uint32(26).string(message.proof)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCalim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCalim } as MsgUpdateCalim
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.proof = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateCalim {
    const message = { ...baseMsgUpdateCalim } as MsgUpdateCalim
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = String(object.proof)
    } else {
      message.proof = ''
    }
    return message
  },

  toJSON(message: MsgUpdateCalim): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.proof !== undefined && (obj.proof = message.proof)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateCalim>): MsgUpdateCalim {
    const message = { ...baseMsgUpdateCalim } as MsgUpdateCalim
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof
    } else {
      message.proof = ''
    }
    return message
  }
}

const baseMsgUpdateCalimResponse: object = {}

export const MsgUpdateCalimResponse = {
  encode(_: MsgUpdateCalimResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCalimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCalimResponse } as MsgUpdateCalimResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateCalimResponse {
    const message = { ...baseMsgUpdateCalimResponse } as MsgUpdateCalimResponse
    return message
  },

  toJSON(_: MsgUpdateCalimResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateCalimResponse>): MsgUpdateCalimResponse {
    const message = { ...baseMsgUpdateCalimResponse } as MsgUpdateCalimResponse
    return message
  }
}

const baseMsgDeleteCalim: object = { creator: '', id: 0 }

export const MsgDeleteCalim = {
  encode(message: MsgDeleteCalim, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCalim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCalim } as MsgDeleteCalim
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteCalim {
    const message = { ...baseMsgDeleteCalim } as MsgDeleteCalim
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteCalim): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteCalim>): MsgDeleteCalim {
    const message = { ...baseMsgDeleteCalim } as MsgDeleteCalim
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteCalimResponse: object = {}

export const MsgDeleteCalimResponse = {
  encode(_: MsgDeleteCalimResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCalimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCalimResponse } as MsgDeleteCalimResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteCalimResponse {
    const message = { ...baseMsgDeleteCalimResponse } as MsgDeleteCalimResponse
    return message
  },

  toJSON(_: MsgDeleteCalimResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteCalimResponse>): MsgDeleteCalimResponse {
    const message = { ...baseMsgDeleteCalimResponse } as MsgDeleteCalimResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateCalim(request: MsgCreateCalim): Promise<MsgCreateCalimResponse>
  UpdateCalim(request: MsgUpdateCalim): Promise<MsgUpdateCalimResponse>
  DeleteCalim(request: MsgDeleteCalim): Promise<MsgDeleteCalimResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateCalim(request: MsgCreateCalim): Promise<MsgCreateCalimResponse> {
    const data = MsgCreateCalim.encode(request).finish()
    const promise = this.rpc.request('chen7gx.my.my.Msg', 'CreateCalim', data)
    return promise.then((data) => MsgCreateCalimResponse.decode(new Reader(data)))
  }

  UpdateCalim(request: MsgUpdateCalim): Promise<MsgUpdateCalimResponse> {
    const data = MsgUpdateCalim.encode(request).finish()
    const promise = this.rpc.request('chen7gx.my.my.Msg', 'UpdateCalim', data)
    return promise.then((data) => MsgUpdateCalimResponse.decode(new Reader(data)))
  }

  DeleteCalim(request: MsgDeleteCalim): Promise<MsgDeleteCalimResponse> {
    const data = MsgDeleteCalim.encode(request).finish()
    const promise = this.rpc.request('chen7gx.my.my.Msg', 'DeleteCalim', data)
    return promise.then((data) => MsgDeleteCalimResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
