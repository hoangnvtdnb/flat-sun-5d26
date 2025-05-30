// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class UpdateTeamTournamentRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UpdateTeamTournamentRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUpdateTeamTournamentRequest(bb:flatbuffers.ByteBuffer, obj?:UpdateTeamTournamentRequest):UpdateTeamTournamentRequest {
  return (obj || new UpdateTeamTournamentRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUpdateTeamTournamentRequest(bb:flatbuffers.ByteBuffer, obj?:UpdateTeamTournamentRequest):UpdateTeamTournamentRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UpdateTeamTournamentRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

groupId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

totalScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

usersHash():string|null
usersHash(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
usersHash(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

teamId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

static startUpdateTeamTournamentRequest(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addGroupId(builder:flatbuffers.Builder, groupId:bigint) {
  builder.addFieldInt64(0, groupId, BigInt('0'));
}

static addTotalScore(builder:flatbuffers.Builder, totalScore:number) {
  builder.addFieldInt32(1, totalScore, 0);
}

static addUsersHash(builder:flatbuffers.Builder, usersHashOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, usersHashOffset, 0);
}

static addTeamId(builder:flatbuffers.Builder, teamId:bigint) {
  builder.addFieldInt64(3, teamId, BigInt('0'));
}

static endUpdateTeamTournamentRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUpdateTeamTournamentRequest(builder:flatbuffers.Builder, groupId:bigint, totalScore:number, usersHashOffset:flatbuffers.Offset, teamId:bigint):flatbuffers.Offset {
  UpdateTeamTournamentRequest.startUpdateTeamTournamentRequest(builder);
  UpdateTeamTournamentRequest.addGroupId(builder, groupId);
  UpdateTeamTournamentRequest.addTotalScore(builder, totalScore);
  UpdateTeamTournamentRequest.addUsersHash(builder, usersHashOffset);
  UpdateTeamTournamentRequest.addTeamId(builder, teamId);
  return UpdateTeamTournamentRequest.endUpdateTeamTournamentRequest(builder);
}
}
