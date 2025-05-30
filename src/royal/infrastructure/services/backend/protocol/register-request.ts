// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class RegisterRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RegisterRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRegisterRequest(bb:flatbuffers.ByteBuffer, obj?:RegisterRequest):RegisterRequest {
  return (obj || new RegisterRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRegisterRequest(bb:flatbuffers.ByteBuffer, obj?:RegisterRequest):RegisterRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RegisterRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

deviceId():string|null
deviceId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
deviceId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

level():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

userId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

userToken():string|null
userToken(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
userToken(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

pgsId():string|null
pgsId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
pgsId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startRegisterRequest(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addDeviceId(builder:flatbuffers.Builder, deviceIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, deviceIdOffset, 0);
}

static addLevel(builder:flatbuffers.Builder, level:number) {
  builder.addFieldInt32(1, level, 0);
}

static addUserId(builder:flatbuffers.Builder, userId:bigint) {
  builder.addFieldInt64(2, userId, BigInt('0'));
}

static addUserToken(builder:flatbuffers.Builder, userTokenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, userTokenOffset, 0);
}

static addPgsId(builder:flatbuffers.Builder, pgsIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, pgsIdOffset, 0);
}

static endRegisterRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRegisterRequest(builder:flatbuffers.Builder, deviceIdOffset:flatbuffers.Offset, level:number, userId:bigint, userTokenOffset:flatbuffers.Offset, pgsIdOffset:flatbuffers.Offset):flatbuffers.Offset {
  RegisterRequest.startRegisterRequest(builder);
  RegisterRequest.addDeviceId(builder, deviceIdOffset);
  RegisterRequest.addLevel(builder, level);
  RegisterRequest.addUserId(builder, userId);
  RegisterRequest.addUserToken(builder, userTokenOffset);
  RegisterRequest.addPgsId(builder, pgsIdOffset);
  return RegisterRequest.endRegisterRequest(builder);
}
}
