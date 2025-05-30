// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class SpecialChatProfile {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SpecialChatProfile {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSpecialChatProfile(bb:flatbuffers.ByteBuffer, obj?:SpecialChatProfile):SpecialChatProfile {
  return (obj || new SpecialChatProfile()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSpecialChatProfile(bb:flatbuffers.ByteBuffer, obj?:SpecialChatProfile):SpecialChatProfile {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SpecialChatProfile()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

isGold():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

specialRewardType():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

knightType():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

teamTournamentEventId():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

isPremium():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startSpecialChatProfile(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addIsGold(builder:flatbuffers.Builder, isGold:boolean) {
  builder.addFieldInt8(0, +isGold, +false);
}

static addSpecialRewardType(builder:flatbuffers.Builder, specialRewardType:number) {
  builder.addFieldInt32(1, specialRewardType, 0);
}

static addKnightType(builder:flatbuffers.Builder, knightType:number) {
  builder.addFieldInt32(2, knightType, 0);
}

static addTeamTournamentEventId(builder:flatbuffers.Builder, teamTournamentEventId:number) {
  builder.addFieldInt32(3, teamTournamentEventId, 0);
}

static addIsPremium(builder:flatbuffers.Builder, isPremium:boolean) {
  builder.addFieldInt8(4, +isPremium, +false);
}

static endSpecialChatProfile(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSpecialChatProfile(builder:flatbuffers.Builder, isGold:boolean, specialRewardType:number, knightType:number, teamTournamentEventId:number, isPremium:boolean):flatbuffers.Offset {
  SpecialChatProfile.startSpecialChatProfile(builder);
  SpecialChatProfile.addIsGold(builder, isGold);
  SpecialChatProfile.addSpecialRewardType(builder, specialRewardType);
  SpecialChatProfile.addKnightType(builder, knightType);
  SpecialChatProfile.addTeamTournamentEventId(builder, teamTournamentEventId);
  SpecialChatProfile.addIsPremium(builder, isPremium);
  return SpecialChatProfile.endSpecialChatProfile(builder);
}
}
