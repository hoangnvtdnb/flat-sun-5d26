// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class BalloonRiseInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):BalloonRiseInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsBalloonRiseInfo(bb:flatbuffers.ByteBuffer, obj?:BalloonRiseInfo):BalloonRiseInfo {
  return (obj || new BalloonRiseInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsBalloonRiseInfo(bb:flatbuffers.ByteBuffer, obj?:BalloonRiseInfo):BalloonRiseInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new BalloonRiseInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

serverEventId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

remainingTime():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

configVersion():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

config():string|null
config(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
config(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

priority():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
}

static startBalloonRiseInfo(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addServerEventId(builder:flatbuffers.Builder, serverEventId:number) {
  builder.addFieldInt32(0, serverEventId, 0);
}

static addRemainingTime(builder:flatbuffers.Builder, remainingTime:bigint) {
  builder.addFieldInt64(1, remainingTime, BigInt('0'));
}

static addConfigVersion(builder:flatbuffers.Builder, configVersion:number) {
  builder.addFieldInt32(2, configVersion, 0);
}

static addConfig(builder:flatbuffers.Builder, configOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, configOffset, 0);
}

static addPriority(builder:flatbuffers.Builder, priority:number) {
  builder.addFieldInt8(4, priority, 0);
}

static endBalloonRiseInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createBalloonRiseInfo(builder:flatbuffers.Builder, serverEventId:number, remainingTime:bigint, configVersion:number, configOffset:flatbuffers.Offset, priority:number):flatbuffers.Offset {
  BalloonRiseInfo.startBalloonRiseInfo(builder);
  BalloonRiseInfo.addServerEventId(builder, serverEventId);
  BalloonRiseInfo.addRemainingTime(builder, remainingTime);
  BalloonRiseInfo.addConfigVersion(builder, configVersion);
  BalloonRiseInfo.addConfig(builder, configOffset);
  BalloonRiseInfo.addPriority(builder, priority);
  return BalloonRiseInfo.endBalloonRiseInfo(builder);
}
}
