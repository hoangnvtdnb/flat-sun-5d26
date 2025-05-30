// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class GetTeamInfoRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GetTeamInfoRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGetTeamInfoRequest(bb:flatbuffers.ByteBuffer, obj?:GetTeamInfoRequest):GetTeamInfoRequest {
  return (obj || new GetTeamInfoRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGetTeamInfoRequest(bb:flatbuffers.ByteBuffer, obj?:GetTeamInfoRequest):GetTeamInfoRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GetTeamInfoRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

teamId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

includeMembers():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startGetTeamInfoRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addTeamId(builder:flatbuffers.Builder, teamId:bigint) {
  builder.addFieldInt64(0, teamId, BigInt('0'));
}

static addIncludeMembers(builder:flatbuffers.Builder, includeMembers:boolean) {
  builder.addFieldInt8(1, +includeMembers, +false);
}

static endGetTeamInfoRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createGetTeamInfoRequest(builder:flatbuffers.Builder, teamId:bigint, includeMembers:boolean):flatbuffers.Offset {
  GetTeamInfoRequest.startGetTeamInfoRequest(builder);
  GetTeamInfoRequest.addTeamId(builder, teamId);
  GetTeamInfoRequest.addIncludeMembers(builder, includeMembers);
  return GetTeamInfoRequest.endGetTeamInfoRequest(builder);
}
}
