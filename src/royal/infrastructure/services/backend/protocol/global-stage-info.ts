// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { WorldCupCountry } from '../../../../../royal/infrastructure/services/backend/protocol/world-cup-country.js';
import { WorldCupUser } from '../../../../../royal/infrastructure/services/backend/protocol/world-cup-user.js';


export class GlobalStageInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GlobalStageInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGlobalStageInfo(bb:flatbuffers.ByteBuffer, obj?:GlobalStageInfo):GlobalStageInfo {
  return (obj || new GlobalStageInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGlobalStageInfo(bb:flatbuffers.ByteBuffer, obj?:GlobalStageInfo):GlobalStageInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GlobalStageInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

topUsers(index: number, obj?:WorldCupUser):WorldCupUser|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new WorldCupUser()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

topUsersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

bottomUsers(index: number, obj?:WorldCupUser):WorldCupUser|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new WorldCupUser()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

bottomUsersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

countries(index: number, obj?:WorldCupCountry):WorldCupCountry|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new WorldCupCountry()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

countriesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startGlobalStageInfo(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addTopUsers(builder:flatbuffers.Builder, topUsersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, topUsersOffset, 0);
}

static createTopUsersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startTopUsersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addBottomUsers(builder:flatbuffers.Builder, bottomUsersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, bottomUsersOffset, 0);
}

static createBottomUsersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startBottomUsersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addCountries(builder:flatbuffers.Builder, countriesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, countriesOffset, 0);
}

static createCountriesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startCountriesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endGlobalStageInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createGlobalStageInfo(builder:flatbuffers.Builder, topUsersOffset:flatbuffers.Offset, bottomUsersOffset:flatbuffers.Offset, countriesOffset:flatbuffers.Offset):flatbuffers.Offset {
  GlobalStageInfo.startGlobalStageInfo(builder);
  GlobalStageInfo.addTopUsers(builder, topUsersOffset);
  GlobalStageInfo.addBottomUsers(builder, bottomUsersOffset);
  GlobalStageInfo.addCountries(builder, countriesOffset);
  return GlobalStageInfo.endGlobalStageInfo(builder);
}
}
