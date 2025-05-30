// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { RequestPlatform } from '../../../../../royal/infrastructure/services/backend/protocol/request-platform.js';
import { RequestType, unionToRequestType, unionListToRequestType } from '../../../../../royal/infrastructure/services/backend/protocol/request-type.js';


export class RequestPackage {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RequestPackage {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRequestPackage(bb:flatbuffers.ByteBuffer, obj?:RequestPackage):RequestPackage {
  return (obj || new RequestPackage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRequestPackage(bb:flatbuffers.ByteBuffer, obj?:RequestPackage):RequestPackage {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RequestPackage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

userId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

userToken():string|null
userToken(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
userToken(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

deviceId():string|null
deviceId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
deviceId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

syncId():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

syncRequired():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

requestsType(index: number):RequestType|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

requestsTypeLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

requestsTypeArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

requests(index: number, obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__union(obj, this.bb!.__vector(this.bb_pos + offset) + index * 4) : null;
}

requestsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

version():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

abTestData(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

abTestDataLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

facebookAccessToken():string|null
facebookAccessToken(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
facebookAccessToken(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

platform():RequestPlatform {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : RequestPlatform.DefaultValueFromOldClients;
}

static startRequestPackage(builder:flatbuffers.Builder) {
  builder.startObject(11);
}

static addUserId(builder:flatbuffers.Builder, userId:bigint) {
  builder.addFieldInt64(0, userId, BigInt('0'));
}

static addUserToken(builder:flatbuffers.Builder, userTokenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, userTokenOffset, 0);
}

static addDeviceId(builder:flatbuffers.Builder, deviceIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, deviceIdOffset, 0);
}

static addSyncId(builder:flatbuffers.Builder, syncId:number) {
  builder.addFieldInt32(3, syncId, 0);
}

static addSyncRequired(builder:flatbuffers.Builder, syncRequired:boolean) {
  builder.addFieldInt8(4, +syncRequired, +false);
}

static addRequestsType(builder:flatbuffers.Builder, requestsTypeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, requestsTypeOffset, 0);
}

static createRequestsTypeVector(builder:flatbuffers.Builder, data:RequestType[]):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startRequestsTypeVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addRequests(builder:flatbuffers.Builder, requestsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, requestsOffset, 0);
}

static createRequestsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startRequestsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addVersion(builder:flatbuffers.Builder, version:number) {
  builder.addFieldInt32(7, version, 0);
}

static addAbTestData(builder:flatbuffers.Builder, abTestDataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, abTestDataOffset, 0);
}

static createAbTestDataVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startAbTestDataVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addFacebookAccessToken(builder:flatbuffers.Builder, facebookAccessTokenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, facebookAccessTokenOffset, 0);
}

static addPlatform(builder:flatbuffers.Builder, platform:RequestPlatform) {
  builder.addFieldInt8(10, platform, RequestPlatform.DefaultValueFromOldClients);
}

static endRequestPackage(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRequestPackage(builder:flatbuffers.Builder, userId:bigint, userTokenOffset:flatbuffers.Offset, deviceIdOffset:flatbuffers.Offset, syncId:number, syncRequired:boolean, requestsTypeOffset:flatbuffers.Offset, requestsOffset:flatbuffers.Offset, version:number, abTestDataOffset:flatbuffers.Offset, facebookAccessTokenOffset:flatbuffers.Offset, platform:RequestPlatform):flatbuffers.Offset {
  RequestPackage.startRequestPackage(builder);
  RequestPackage.addUserId(builder, userId);
  RequestPackage.addUserToken(builder, userTokenOffset);
  RequestPackage.addDeviceId(builder, deviceIdOffset);
  RequestPackage.addSyncId(builder, syncId);
  RequestPackage.addSyncRequired(builder, syncRequired);
  RequestPackage.addRequestsType(builder, requestsTypeOffset);
  RequestPackage.addRequests(builder, requestsOffset);
  RequestPackage.addVersion(builder, version);
  RequestPackage.addAbTestData(builder, abTestDataOffset);
  RequestPackage.addFacebookAccessToken(builder, facebookAccessTokenOffset);
  RequestPackage.addPlatform(builder, platform);
  return RequestPackage.endRequestPackage(builder);
}
}
