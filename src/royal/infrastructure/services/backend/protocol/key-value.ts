// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class KeyValue {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):KeyValue {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsKeyValue(bb:flatbuffers.ByteBuffer, obj?:KeyValue):KeyValue {
  return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsKeyValue(bb:flatbuffers.ByteBuffer, obj?:KeyValue):KeyValue {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

key():string|null
key(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
key(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

value():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

static startKeyValue(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addKey(builder:flatbuffers.Builder, keyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, keyOffset, 0);
}

static addValue(builder:flatbuffers.Builder, value:bigint) {
  builder.addFieldInt64(1, value, BigInt('0'));
}

static endKeyValue(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createKeyValue(builder:flatbuffers.Builder, keyOffset:flatbuffers.Offset, value:bigint):flatbuffers.Offset {
  KeyValue.startKeyValue(builder);
  KeyValue.addKey(builder, keyOffset);
  KeyValue.addValue(builder, value);
  return KeyValue.endKeyValue(builder);
}
}
