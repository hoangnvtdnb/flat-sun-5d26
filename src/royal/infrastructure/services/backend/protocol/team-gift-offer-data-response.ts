// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ChatProfile } from '../../../../../royal/infrastructure/services/backend/protocol/chat-profile.js';
import { UserInfo } from '../../../../../royal/infrastructure/services/backend/protocol/user-info.js';


export class TeamGiftOfferDataResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TeamGiftOfferDataResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTeamGiftOfferDataResponse(bb:flatbuffers.ByteBuffer, obj?:TeamGiftOfferDataResponse):TeamGiftOfferDataResponse {
  return (obj || new TeamGiftOfferDataResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTeamGiftOfferDataResponse(bb:flatbuffers.ByteBuffer, obj?:TeamGiftOfferDataResponse):TeamGiftOfferDataResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TeamGiftOfferDataResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

buyerInfo(obj?:UserInfo):UserInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new UserInfo()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

purchaseTime():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

claimTime():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

step():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

chatProfile(obj?:ChatProfile):ChatProfile|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new ChatProfile()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startTeamGiftOfferDataResponse(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addBuyerInfo(builder:flatbuffers.Builder, buyerInfoOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, buyerInfoOffset, 0);
}

static addPurchaseTime(builder:flatbuffers.Builder, purchaseTime:bigint) {
  builder.addFieldInt64(1, purchaseTime, BigInt('0'));
}

static addClaimTime(builder:flatbuffers.Builder, claimTime:bigint) {
  builder.addFieldInt64(2, claimTime, BigInt('0'));
}

static addStep(builder:flatbuffers.Builder, step:number) {
  builder.addFieldInt32(3, step, 0);
}

static addChatProfile(builder:flatbuffers.Builder, chatProfileOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, chatProfileOffset, 0);
}

static endTeamGiftOfferDataResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
