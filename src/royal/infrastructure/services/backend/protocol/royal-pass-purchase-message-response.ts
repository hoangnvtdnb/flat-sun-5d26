// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { UserInfo } from '../../../../../royal/infrastructure/services/backend/protocol/user-info.js';


export class RoyalPassPurchaseMessageResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RoyalPassPurchaseMessageResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRoyalPassPurchaseMessageResponse(bb:flatbuffers.ByteBuffer, obj?:RoyalPassPurchaseMessageResponse):RoyalPassPurchaseMessageResponse {
  return (obj || new RoyalPassPurchaseMessageResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRoyalPassPurchaseMessageResponse(bb:flatbuffers.ByteBuffer, obj?:RoyalPassPurchaseMessageResponse):RoyalPassPurchaseMessageResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RoyalPassPurchaseMessageResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

userInfo(obj?:UserInfo):UserInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new UserInfo()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

purchaseTime():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

static startRoyalPassPurchaseMessageResponse(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addUserInfo(builder:flatbuffers.Builder, userInfoOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, userInfoOffset, 0);
}

static addPurchaseTime(builder:flatbuffers.Builder, purchaseTime:bigint) {
  builder.addFieldInt64(1, purchaseTime, BigInt('0'));
}

static endRoyalPassPurchaseMessageResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRoyalPassPurchaseMessageResponse(builder:flatbuffers.Builder, userInfoOffset:flatbuffers.Offset, purchaseTime:bigint):flatbuffers.Offset {
  RoyalPassPurchaseMessageResponse.startRoyalPassPurchaseMessageResponse(builder);
  RoyalPassPurchaseMessageResponse.addUserInfo(builder, userInfoOffset);
  RoyalPassPurchaseMessageResponse.addPurchaseTime(builder, purchaseTime);
  return RoyalPassPurchaseMessageResponse.endRoyalPassPurchaseMessageResponse(builder);
}
}
