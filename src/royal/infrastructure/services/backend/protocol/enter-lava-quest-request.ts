// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class EnterLavaQuestRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):EnterLavaQuestRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsEnterLavaQuestRequest(bb:flatbuffers.ByteBuffer, obj?:EnterLavaQuestRequest):EnterLavaQuestRequest {
  return (obj || new EnterLavaQuestRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsEnterLavaQuestRequest(bb:flatbuffers.ByteBuffer, obj?:EnterLavaQuestRequest):EnterLavaQuestRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new EnterLavaQuestRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

level():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

leagueLevel():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startEnterLavaQuestRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addLevel(builder:flatbuffers.Builder, level:number) {
  builder.addFieldInt32(0, level, 0);
}

static addLeagueLevel(builder:flatbuffers.Builder, leagueLevel:number) {
  builder.addFieldInt32(1, leagueLevel, 0);
}

static endEnterLavaQuestRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createEnterLavaQuestRequest(builder:flatbuffers.Builder, level:number, leagueLevel:number):flatbuffers.Offset {
  EnterLavaQuestRequest.startEnterLavaQuestRequest(builder);
  EnterLavaQuestRequest.addLevel(builder, level);
  EnterLavaQuestRequest.addLeagueLevel(builder, leagueLevel);
  return EnterLavaQuestRequest.endEnterLavaQuestRequest(builder);
}
}
