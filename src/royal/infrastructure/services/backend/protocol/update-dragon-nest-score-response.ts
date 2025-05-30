// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class UpdateDragonNestScoreResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UpdateDragonNestScoreResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUpdateDragonNestScoreResponse(bb:flatbuffers.ByteBuffer, obj?:UpdateDragonNestScoreResponse):UpdateDragonNestScoreResponse {
  return (obj || new UpdateDragonNestScoreResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUpdateDragonNestScoreResponse(bb:flatbuffers.ByteBuffer, obj?:UpdateDragonNestScoreResponse):UpdateDragonNestScoreResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UpdateDragonNestScoreResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

success():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startUpdateDragonNestScoreResponse(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addSuccess(builder:flatbuffers.Builder, success:boolean) {
  builder.addFieldInt8(0, +success, +false);
}

static endUpdateDragonNestScoreResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUpdateDragonNestScoreResponse(builder:flatbuffers.Builder, success:boolean):flatbuffers.Offset {
  UpdateDragonNestScoreResponse.startUpdateDragonNestScoreResponse(builder);
  UpdateDragonNestScoreResponse.addSuccess(builder, success);
  return UpdateDragonNestScoreResponse.endUpdateDragonNestScoreResponse(builder);
}
}
