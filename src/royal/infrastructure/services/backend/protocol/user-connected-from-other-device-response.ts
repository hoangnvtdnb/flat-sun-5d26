// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class UserConnectedFromOtherDeviceResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UserConnectedFromOtherDeviceResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUserConnectedFromOtherDeviceResponse(bb:flatbuffers.ByteBuffer, obj?:UserConnectedFromOtherDeviceResponse):UserConnectedFromOtherDeviceResponse {
  return (obj || new UserConnectedFromOtherDeviceResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUserConnectedFromOtherDeviceResponse(bb:flatbuffers.ByteBuffer, obj?:UserConnectedFromOtherDeviceResponse):UserConnectedFromOtherDeviceResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UserConnectedFromOtherDeviceResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startUserConnectedFromOtherDeviceResponse(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endUserConnectedFromOtherDeviceResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUserConnectedFromOtherDeviceResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  UserConnectedFromOtherDeviceResponse.startUserConnectedFromOtherDeviceResponse(builder);
  return UserConnectedFromOtherDeviceResponse.endUserConnectedFromOtherDeviceResponse(builder);
}
}
