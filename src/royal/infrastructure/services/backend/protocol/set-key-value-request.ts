// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ByteArrayKeyValue } from '../../../../../royal/infrastructure/services/backend/protocol/byte-array-key-value.js';
import { KeyValue } from '../../../../../royal/infrastructure/services/backend/protocol/key-value.js';


export class SetKeyValueRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetKeyValueRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetKeyValueRequest(bb:flatbuffers.ByteBuffer, obj?:SetKeyValueRequest):SetKeyValueRequest {
  return (obj || new SetKeyValueRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetKeyValueRequest(bb:flatbuffers.ByteBuffer, obj?:SetKeyValueRequest):SetKeyValueRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetKeyValueRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

deprecatedKey():string|null
deprecatedKey(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
deprecatedKey(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

deprecatedValue():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

keyValueList(index: number, obj?:KeyValue):KeyValue|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new KeyValue()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

keyValueListLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

byteArrayKeyValueList(index: number, obj?:ByteArrayKeyValue):ByteArrayKeyValue|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new ByteArrayKeyValue()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

byteArrayKeyValueListLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startSetKeyValueRequest(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addDeprecatedKey(builder:flatbuffers.Builder, deprecatedKeyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, deprecatedKeyOffset, 0);
}

static addDeprecatedValue(builder:flatbuffers.Builder, deprecatedValue:bigint) {
  builder.addFieldInt64(1, deprecatedValue, BigInt('0'));
}

static addKeyValueList(builder:flatbuffers.Builder, keyValueListOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, keyValueListOffset, 0);
}

static createKeyValueListVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startKeyValueListVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addByteArrayKeyValueList(builder:flatbuffers.Builder, byteArrayKeyValueListOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, byteArrayKeyValueListOffset, 0);
}

static createByteArrayKeyValueListVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startByteArrayKeyValueListVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endSetKeyValueRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSetKeyValueRequest(builder:flatbuffers.Builder, deprecatedKeyOffset:flatbuffers.Offset, deprecatedValue:bigint, keyValueListOffset:flatbuffers.Offset, byteArrayKeyValueListOffset:flatbuffers.Offset):flatbuffers.Offset {
  SetKeyValueRequest.startSetKeyValueRequest(builder);
  SetKeyValueRequest.addDeprecatedKey(builder, deprecatedKeyOffset);
  SetKeyValueRequest.addDeprecatedValue(builder, deprecatedValue);
  SetKeyValueRequest.addKeyValueList(builder, keyValueListOffset);
  SetKeyValueRequest.addByteArrayKeyValueList(builder, byteArrayKeyValueListOffset);
  return SetKeyValueRequest.endSetKeyValueRequest(builder);
}
}
