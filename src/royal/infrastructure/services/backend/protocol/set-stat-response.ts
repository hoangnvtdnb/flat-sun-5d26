// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ResponseStatusCode } from '../../../../../royal/infrastructure/services/backend/protocol/response-status-code.js';


export class SetStatResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetStatResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetStatResponse(bb:flatbuffers.ByteBuffer, obj?:SetStatResponse):SetStatResponse {
  return (obj || new SetStatResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetStatResponse(bb:flatbuffers.ByteBuffer, obj?:SetStatResponse):SetStatResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetStatResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

statusCode():ResponseStatusCode {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : ResponseStatusCode.Success;
}

static startSetStatResponse(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addStatusCode(builder:flatbuffers.Builder, statusCode:ResponseStatusCode) {
  builder.addFieldInt8(0, statusCode, ResponseStatusCode.Success);
}

static endSetStatResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSetStatResponse(builder:flatbuffers.Builder, statusCode:ResponseStatusCode):flatbuffers.Offset {
  SetStatResponse.startSetStatResponse(builder);
  SetStatResponse.addStatusCode(builder, statusCode);
  return SetStatResponse.endSetStatResponse(builder);
}
}
