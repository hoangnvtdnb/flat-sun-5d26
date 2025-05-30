// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class RemoveFriendRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RemoveFriendRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRemoveFriendRequest(bb:flatbuffers.ByteBuffer, obj?:RemoveFriendRequest):RemoveFriendRequest {
  return (obj || new RemoveFriendRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRemoveFriendRequest(bb:flatbuffers.ByteBuffer, obj?:RemoveFriendRequest):RemoveFriendRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RemoveFriendRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

userId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

static startRemoveFriendRequest(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addUserId(builder:flatbuffers.Builder, userId:bigint) {
  builder.addFieldInt64(0, userId, BigInt('0'));
}

static endRemoveFriendRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRemoveFriendRequest(builder:flatbuffers.Builder, userId:bigint):flatbuffers.Offset {
  RemoveFriendRequest.startRemoveFriendRequest(builder);
  RemoveFriendRequest.addUserId(builder, userId);
  return RemoveFriendRequest.endRemoveFriendRequest(builder);
}
}
