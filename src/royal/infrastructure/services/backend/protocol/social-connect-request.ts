// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class SocialConnectRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SocialConnectRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSocialConnectRequest(bb:flatbuffers.ByteBuffer, obj?:SocialConnectRequest):SocialConnectRequest {
  return (obj || new SocialConnectRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSocialConnectRequest(bb:flatbuffers.ByteBuffer, obj?:SocialConnectRequest):SocialConnectRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SocialConnectRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

facebookId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

deviceId():string|null
deviceId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
deviceId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

friends(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

friendsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

appleId():string|null
appleId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
appleId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

appleAuthorizationCode():string|null
appleAuthorizationCode(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
appleAuthorizationCode(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

googleId():string|null
googleId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
googleId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

pgsId():string|null
pgsId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
pgsId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

accessOrIdToken():string|null
accessOrIdToken(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
accessOrIdToken(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startSocialConnectRequest(builder:flatbuffers.Builder) {
  builder.startObject(9);
}

static addFacebookId(builder:flatbuffers.Builder, facebookId:bigint) {
  builder.addFieldInt64(0, facebookId, BigInt('0'));
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, nameOffset, 0);
}

static addDeviceId(builder:flatbuffers.Builder, deviceIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, deviceIdOffset, 0);
}

static addFriends(builder:flatbuffers.Builder, friendsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, friendsOffset, 0);
}

static createFriendsVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startFriendsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addAppleId(builder:flatbuffers.Builder, appleIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, appleIdOffset, 0);
}

static addAppleAuthorizationCode(builder:flatbuffers.Builder, appleAuthorizationCodeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, appleAuthorizationCodeOffset, 0);
}

static addGoogleId(builder:flatbuffers.Builder, googleIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, googleIdOffset, 0);
}

static addPgsId(builder:flatbuffers.Builder, pgsIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, pgsIdOffset, 0);
}

static addAccessOrIdToken(builder:flatbuffers.Builder, accessOrIdTokenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, accessOrIdTokenOffset, 0);
}

static endSocialConnectRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSocialConnectRequest(builder:flatbuffers.Builder, facebookId:bigint, nameOffset:flatbuffers.Offset, deviceIdOffset:flatbuffers.Offset, friendsOffset:flatbuffers.Offset, appleIdOffset:flatbuffers.Offset, appleAuthorizationCodeOffset:flatbuffers.Offset, googleIdOffset:flatbuffers.Offset, pgsIdOffset:flatbuffers.Offset, accessOrIdTokenOffset:flatbuffers.Offset):flatbuffers.Offset {
  SocialConnectRequest.startSocialConnectRequest(builder);
  SocialConnectRequest.addFacebookId(builder, facebookId);
  SocialConnectRequest.addName(builder, nameOffset);
  SocialConnectRequest.addDeviceId(builder, deviceIdOffset);
  SocialConnectRequest.addFriends(builder, friendsOffset);
  SocialConnectRequest.addAppleId(builder, appleIdOffset);
  SocialConnectRequest.addAppleAuthorizationCode(builder, appleAuthorizationCodeOffset);
  SocialConnectRequest.addGoogleId(builder, googleIdOffset);
  SocialConnectRequest.addPgsId(builder, pgsIdOffset);
  SocialConnectRequest.addAccessOrIdToken(builder, accessOrIdTokenOffset);
  return SocialConnectRequest.endSocialConnectRequest(builder);
}
}
