// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class AskFriendshipRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):AskFriendshipRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAskFriendshipRequest(bb:flatbuffers.ByteBuffer, obj?:AskFriendshipRequest):AskFriendshipRequest {
  return (obj || new AskFriendshipRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAskFriendshipRequest(bb:flatbuffers.ByteBuffer, obj?:AskFriendshipRequest):AskFriendshipRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AskFriendshipRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

userId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

isDeeplink():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startAskFriendshipRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addUserId(builder:flatbuffers.Builder, userId:bigint) {
  builder.addFieldInt64(0, userId, BigInt('0'));
}

static addIsDeeplink(builder:flatbuffers.Builder, isDeeplink:boolean) {
  builder.addFieldInt8(1, +isDeeplink, +false);
}

static endAskFriendshipRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createAskFriendshipRequest(builder:flatbuffers.Builder, userId:bigint, isDeeplink:boolean):flatbuffers.Offset {
  AskFriendshipRequest.startAskFriendshipRequest(builder);
  AskFriendshipRequest.addUserId(builder, userId);
  AskFriendshipRequest.addIsDeeplink(builder, isDeeplink);
  return AskFriendshipRequest.endAskFriendshipRequest(builder);
}
}
