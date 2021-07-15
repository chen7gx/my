/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Calim } from '../my/calim'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'chen7gx.my.my'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetCalimRequest {
  id: number
}

export interface QueryGetCalimResponse {
  Calim: Calim | undefined
}

export interface QueryAllCalimRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCalimResponse {
  Calim: Calim[]
  pagination: PageResponse | undefined
}

const baseQueryGetCalimRequest: object = { id: 0 }

export const QueryGetCalimRequest = {
  encode(message: QueryGetCalimRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCalimRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCalimRequest } as QueryGetCalimRequest
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

  fromJSON(object: any): QueryGetCalimRequest {
    const message = { ...baseQueryGetCalimRequest } as QueryGetCalimRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetCalimRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCalimRequest>): QueryGetCalimRequest {
    const message = { ...baseQueryGetCalimRequest } as QueryGetCalimRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetCalimResponse: object = {}

export const QueryGetCalimResponse = {
  encode(message: QueryGetCalimResponse, writer: Writer = Writer.create()): Writer {
    if (message.Calim !== undefined) {
      Calim.encode(message.Calim, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCalimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCalimResponse } as QueryGetCalimResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Calim = Calim.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCalimResponse {
    const message = { ...baseQueryGetCalimResponse } as QueryGetCalimResponse
    if (object.Calim !== undefined && object.Calim !== null) {
      message.Calim = Calim.fromJSON(object.Calim)
    } else {
      message.Calim = undefined
    }
    return message
  },

  toJSON(message: QueryGetCalimResponse): unknown {
    const obj: any = {}
    message.Calim !== undefined && (obj.Calim = message.Calim ? Calim.toJSON(message.Calim) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCalimResponse>): QueryGetCalimResponse {
    const message = { ...baseQueryGetCalimResponse } as QueryGetCalimResponse
    if (object.Calim !== undefined && object.Calim !== null) {
      message.Calim = Calim.fromPartial(object.Calim)
    } else {
      message.Calim = undefined
    }
    return message
  }
}

const baseQueryAllCalimRequest: object = {}

export const QueryAllCalimRequest = {
  encode(message: QueryAllCalimRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCalimRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCalimRequest } as QueryAllCalimRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCalimRequest {
    const message = { ...baseQueryAllCalimRequest } as QueryAllCalimRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCalimRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCalimRequest>): QueryAllCalimRequest {
    const message = { ...baseQueryAllCalimRequest } as QueryAllCalimRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllCalimResponse: object = {}

export const QueryAllCalimResponse = {
  encode(message: QueryAllCalimResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Calim) {
      Calim.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCalimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCalimResponse } as QueryAllCalimResponse
    message.Calim = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Calim.push(Calim.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCalimResponse {
    const message = { ...baseQueryAllCalimResponse } as QueryAllCalimResponse
    message.Calim = []
    if (object.Calim !== undefined && object.Calim !== null) {
      for (const e of object.Calim) {
        message.Calim.push(Calim.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCalimResponse): unknown {
    const obj: any = {}
    if (message.Calim) {
      obj.Calim = message.Calim.map((e) => (e ? Calim.toJSON(e) : undefined))
    } else {
      obj.Calim = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCalimResponse>): QueryAllCalimResponse {
    const message = { ...baseQueryAllCalimResponse } as QueryAllCalimResponse
    message.Calim = []
    if (object.Calim !== undefined && object.Calim !== null) {
      for (const e of object.Calim) {
        message.Calim.push(Calim.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a calim by id. */
  Calim(request: QueryGetCalimRequest): Promise<QueryGetCalimResponse>
  /** Queries a list of calim items. */
  CalimAll(request: QueryAllCalimRequest): Promise<QueryAllCalimResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Calim(request: QueryGetCalimRequest): Promise<QueryGetCalimResponse> {
    const data = QueryGetCalimRequest.encode(request).finish()
    const promise = this.rpc.request('chen7gx.my.my.Query', 'Calim', data)
    return promise.then((data) => QueryGetCalimResponse.decode(new Reader(data)))
  }

  CalimAll(request: QueryAllCalimRequest): Promise<QueryAllCalimResponse> {
    const data = QueryAllCalimRequest.encode(request).finish()
    const promise = this.rpc.request('chen7gx.my.my.Query', 'CalimAll', data)
    return promise.then((data) => QueryAllCalimResponse.decode(new Reader(data)))
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
