// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { SkyRaceUser } from '../../../../../royal/infrastructure/services/backend/protocol/sky-race-user.js';
import { UserEventStatus } from '../../../../../royal/infrastructure/services/backend/protocol/user-event-status.js';


export class SkyRaceInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SkyRaceInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSkyRaceInfo(bb:flatbuffers.ByteBuffer, obj?:SkyRaceInfo):SkyRaceInfo {
  return (obj || new SkyRaceInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSkyRaceInfo(bb:flatbuffers.ByteBuffer, obj?:SkyRaceInfo):SkyRaceInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SkyRaceInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

eventId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

groupId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

remainingTime():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

status():UserEventStatus {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : UserEventStatus.Continue;
}

users(index: number, obj?:SkyRaceUser):SkyRaceUser|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new SkyRaceUser()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

usersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

serverEventId():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

config():string|null
config(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
config(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

configVersion():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startSkyRaceInfo(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addEventId(builder:flatbuffers.Builder, eventId:number) {
  builder.addFieldInt32(0, eventId, 0);
}

static addGroupId(builder:flatbuffers.Builder, groupId:bigint) {
  builder.addFieldInt64(1, groupId, BigInt('0'));
}

static addRemainingTime(builder:flatbuffers.Builder, remainingTime:bigint) {
  builder.addFieldInt64(2, remainingTime, BigInt('0'));
}

static addStatus(builder:flatbuffers.Builder, status:UserEventStatus) {
  builder.addFieldInt8(3, status, UserEventStatus.Continue);
}

static addUsers(builder:flatbuffers.Builder, usersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, usersOffset, 0);
}

static createUsersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startUsersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addServerEventId(builder:flatbuffers.Builder, serverEventId:number) {
  builder.addFieldInt32(5, serverEventId, 0);
}

static addConfig(builder:flatbuffers.Builder, configOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, configOffset, 0);
}

static addConfigVersion(builder:flatbuffers.Builder, configVersion:number) {
  builder.addFieldInt32(7, configVersion, 0);
}

static endSkyRaceInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSkyRaceInfo(builder:flatbuffers.Builder, eventId:number, groupId:bigint, remainingTime:bigint, status:UserEventStatus, usersOffset:flatbuffers.Offset, serverEventId:number, configOffset:flatbuffers.Offset, configVersion:number):flatbuffers.Offset {
  SkyRaceInfo.startSkyRaceInfo(builder);
  SkyRaceInfo.addEventId(builder, eventId);
  SkyRaceInfo.addGroupId(builder, groupId);
  SkyRaceInfo.addRemainingTime(builder, remainingTime);
  SkyRaceInfo.addStatus(builder, status);
  SkyRaceInfo.addUsers(builder, usersOffset);
  SkyRaceInfo.addServerEventId(builder, serverEventId);
  SkyRaceInfo.addConfig(builder, configOffset);
  SkyRaceInfo.addConfigVersion(builder, configVersion);
  return SkyRaceInfo.endSkyRaceInfo(builder);
}
}
