// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class GetProfileRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GetProfileRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGetProfileRequest(bb:flatbuffers.ByteBuffer, obj?:GetProfileRequest):GetProfileRequest {
  return (obj || new GetProfileRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGetProfileRequest(bb:flatbuffers.ByteBuffer, obj?:GetProfileRequest):GetProfileRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GetProfileRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

userId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

static startGetProfileRequest(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addUserId(builder:flatbuffers.Builder, userId:bigint) {
  builder.addFieldInt64(0, userId, BigInt('0'));
}

static endGetProfileRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createGetProfileRequest(builder:flatbuffers.Builder, userId:bigint):flatbuffers.Offset {
  GetProfileRequest.startGetProfileRequest(builder);
  GetProfileRequest.addUserId(builder, userId);
  return GetProfileRequest.endGetProfileRequest(builder);
}
}
