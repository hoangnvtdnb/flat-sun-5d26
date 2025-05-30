// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class PremiumPassClaimRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PremiumPassClaimRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPremiumPassClaimRequest(bb:flatbuffers.ByteBuffer, obj?:PremiumPassClaimRequest):PremiumPassClaimRequest {
  return (obj || new PremiumPassClaimRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPremiumPassClaimRequest(bb:flatbuffers.ByteBuffer, obj?:PremiumPassClaimRequest):PremiumPassClaimRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PremiumPassClaimRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

buyerUserId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

static startPremiumPassClaimRequest(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addBuyerUserId(builder:flatbuffers.Builder, buyerUserId:bigint) {
  builder.addFieldInt64(0, buyerUserId, BigInt('0'));
}

static endPremiumPassClaimRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPremiumPassClaimRequest(builder:flatbuffers.Builder, buyerUserId:bigint):flatbuffers.Offset {
  PremiumPassClaimRequest.startPremiumPassClaimRequest(builder);
  PremiumPassClaimRequest.addBuyerUserId(builder, buyerUserId);
  return PremiumPassClaimRequest.endPremiumPassClaimRequest(builder);
}
}
