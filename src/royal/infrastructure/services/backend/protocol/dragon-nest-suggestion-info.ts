// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { DragonNestUser } from '../../../../../royal/infrastructure/services/backend/protocol/dragon-nest-user.js';


export class DragonNestSuggestionInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DragonNestSuggestionInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDragonNestSuggestionInfo(bb:flatbuffers.ByteBuffer, obj?:DragonNestSuggestionInfo):DragonNestSuggestionInfo {
  return (obj || new DragonNestSuggestionInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDragonNestSuggestionInfo(bb:flatbuffers.ByteBuffer, obj?:DragonNestSuggestionInfo):DragonNestSuggestionInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DragonNestSuggestionInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

profileData(obj?:DragonNestUser):DragonNestUser|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DragonNestUser()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

mutualFriendCount():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startDragonNestSuggestionInfo(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addProfileData(builder:flatbuffers.Builder, profileDataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, profileDataOffset, 0);
}

static addMutualFriendCount(builder:flatbuffers.Builder, mutualFriendCount:number) {
  builder.addFieldInt32(1, mutualFriendCount, 0);
}

static endDragonNestSuggestionInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDragonNestSuggestionInfo(builder:flatbuffers.Builder, profileDataOffset:flatbuffers.Offset, mutualFriendCount:number):flatbuffers.Offset {
  DragonNestSuggestionInfo.startDragonNestSuggestionInfo(builder);
  DragonNestSuggestionInfo.addProfileData(builder, profileDataOffset);
  DragonNestSuggestionInfo.addMutualFriendCount(builder, mutualFriendCount);
  return DragonNestSuggestionInfo.endDragonNestSuggestionInfo(builder);
}
}
