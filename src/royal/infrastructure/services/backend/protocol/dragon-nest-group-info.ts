// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { DragonNestUser } from '../../../../../royal/infrastructure/services/backend/protocol/dragon-nest-user.js';
import { DragonType } from '../../../../../royal/infrastructure/services/backend/protocol/dragon-type.js';


export class DragonNestGroupInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DragonNestGroupInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDragonNestGroupInfo(bb:flatbuffers.ByteBuffer, obj?:DragonNestGroupInfo):DragonNestGroupInfo {
  return (obj || new DragonNestGroupInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDragonNestGroupInfo(bb:flatbuffers.ByteBuffer, obj?:DragonNestGroupInfo):DragonNestGroupInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DragonNestGroupInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

dragonType():DragonType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : DragonType.None;
}

partnerUserProfile(obj?:DragonNestUser):DragonNestUser|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new DragonNestUser()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

myScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

partnerScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startDragonNestGroupInfo(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addDragonType(builder:flatbuffers.Builder, dragonType:DragonType) {
  builder.addFieldInt8(0, dragonType, DragonType.None);
}

static addPartnerUserProfile(builder:flatbuffers.Builder, partnerUserProfileOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, partnerUserProfileOffset, 0);
}

static addMyScore(builder:flatbuffers.Builder, myScore:number) {
  builder.addFieldInt32(2, myScore, 0);
}

static addPartnerScore(builder:flatbuffers.Builder, partnerScore:number) {
  builder.addFieldInt32(3, partnerScore, 0);
}

static endDragonNestGroupInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
