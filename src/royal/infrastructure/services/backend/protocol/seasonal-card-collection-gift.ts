// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { CardTransactionType } from '../../../../../royal/infrastructure/services/backend/protocol/card-transaction-type.js';
import { UserProfile } from '../../../../../royal/infrastructure/services/backend/protocol/user-profile.js';


export class SeasonalCardCollectionGift {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SeasonalCardCollectionGift {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSeasonalCardCollectionGift(bb:flatbuffers.ByteBuffer, obj?:SeasonalCardCollectionGift):SeasonalCardCollectionGift {
  return (obj || new SeasonalCardCollectionGift()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSeasonalCardCollectionGift(bb:flatbuffers.ByteBuffer, obj?:SeasonalCardCollectionGift):SeasonalCardCollectionGift {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SeasonalCardCollectionGift()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

eventId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

setId():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

cardId():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

senderProfile(obj?:UserProfile):UserProfile|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new UserProfile()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

cardTransactionType():CardTransactionType {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : CardTransactionType.FRIEND;
}

static startSeasonalCardCollectionGift(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addEventId(builder:flatbuffers.Builder, eventId:number) {
  builder.addFieldInt32(0, eventId, 0);
}

static addSetId(builder:flatbuffers.Builder, setId:number) {
  builder.addFieldInt32(1, setId, 0);
}

static addCardId(builder:flatbuffers.Builder, cardId:number) {
  builder.addFieldInt32(2, cardId, 0);
}

static addSenderProfile(builder:flatbuffers.Builder, senderProfileOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, senderProfileOffset, 0);
}

static addCardTransactionType(builder:flatbuffers.Builder, cardTransactionType:CardTransactionType) {
  builder.addFieldInt8(4, cardTransactionType, CardTransactionType.FRIEND);
}

static endSeasonalCardCollectionGift(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
