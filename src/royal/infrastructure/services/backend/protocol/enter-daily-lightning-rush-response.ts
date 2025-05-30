// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { DailyLightningRushGroupInfo } from '../../../../../royal/infrastructure/services/backend/protocol/daily-lightning-rush-group-info.js';
import { DailyLightningRushInfo } from '../../../../../royal/infrastructure/services/backend/protocol/daily-lightning-rush-info.js';
import { EnterDailyLightningRushFailReason } from '../../../../../royal/infrastructure/services/backend/protocol/enter-daily-lightning-rush-fail-reason.js';


export class EnterDailyLightningRushResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):EnterDailyLightningRushResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsEnterDailyLightningRushResponse(bb:flatbuffers.ByteBuffer, obj?:EnterDailyLightningRushResponse):EnterDailyLightningRushResponse {
  return (obj || new EnterDailyLightningRushResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsEnterDailyLightningRushResponse(bb:flatbuffers.ByteBuffer, obj?:EnterDailyLightningRushResponse):EnterDailyLightningRushResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new EnterDailyLightningRushResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

failReason():EnterDailyLightningRushFailReason {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : EnterDailyLightningRushFailReason.None;
}

dailyLightningRushInfo(obj?:DailyLightningRushInfo):DailyLightningRushInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new DailyLightningRushInfo()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

dailyLightningRushGroupInfo(obj?:DailyLightningRushGroupInfo):DailyLightningRushGroupInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new DailyLightningRushGroupInfo()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

hasEntered3StepGroup():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startEnterDailyLightningRushResponse(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addFailReason(builder:flatbuffers.Builder, failReason:EnterDailyLightningRushFailReason) {
  builder.addFieldInt8(0, failReason, EnterDailyLightningRushFailReason.None);
}

static addDailyLightningRushInfo(builder:flatbuffers.Builder, dailyLightningRushInfoOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, dailyLightningRushInfoOffset, 0);
}

static addDailyLightningRushGroupInfo(builder:flatbuffers.Builder, dailyLightningRushGroupInfoOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, dailyLightningRushGroupInfoOffset, 0);
}

static addHasEntered3StepGroup(builder:flatbuffers.Builder, hasEntered3StepGroup:boolean) {
  builder.addFieldInt8(3, +hasEntered3StepGroup, +false);
}

static endEnterDailyLightningRushResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
