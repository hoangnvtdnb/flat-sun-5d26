// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class GetTeamMembersRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GetTeamMembersRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGetTeamMembersRequest(bb:flatbuffers.ByteBuffer, obj?:GetTeamMembersRequest):GetTeamMembersRequest {
  return (obj || new GetTeamMembersRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGetTeamMembersRequest(bb:flatbuffers.ByteBuffer, obj?:GetTeamMembersRequest):GetTeamMembersRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GetTeamMembersRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

teamId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

static startGetTeamMembersRequest(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addTeamId(builder:flatbuffers.Builder, teamId:bigint) {
  builder.addFieldInt64(0, teamId, BigInt('0'));
}

static endGetTeamMembersRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createGetTeamMembersRequest(builder:flatbuffers.Builder, teamId:bigint):flatbuffers.Offset {
  GetTeamMembersRequest.startGetTeamMembersRequest(builder);
  GetTeamMembersRequest.addTeamId(builder, teamId);
  return GetTeamMembersRequest.endGetTeamMembersRequest(builder);
}
}
