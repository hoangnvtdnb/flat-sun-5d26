// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class CardCollectionSetProgress {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CardCollectionSetProgress {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCardCollectionSetProgress(bb:flatbuffers.ByteBuffer, obj?:CardCollectionSetProgress):CardCollectionSetProgress {
  return (obj || new CardCollectionSetProgress()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCardCollectionSetProgress(bb:flatbuffers.ByteBuffer, obj?:CardCollectionSetProgress):CardCollectionSetProgress {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CardCollectionSetProgress()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

value():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startCardCollectionSetProgress(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
}

static addValue(builder:flatbuffers.Builder, value:number) {
  builder.addFieldInt32(1, value, 0);
}

static endCardCollectionSetProgress(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCardCollectionSetProgress(builder:flatbuffers.Builder, id:number, value:number):flatbuffers.Offset {
  CardCollectionSetProgress.startCardCollectionSetProgress(builder);
  CardCollectionSetProgress.addId(builder, id);
  CardCollectionSetProgress.addValue(builder, value);
  return CardCollectionSetProgress.endCardCollectionSetProgress(builder);
}
}
