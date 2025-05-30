// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { DynamicOfferConfigVersion } from '../../../../../royal/infrastructure/services/backend/protocol/dynamic-offer-config-version.js';


export class ConfigVersions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ConfigVersions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsConfigVersions(bb:flatbuffers.ByteBuffer, obj?:ConfigVersions):ConfigVersions {
  return (obj || new ConfigVersions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsConfigVersions(bb:flatbuffers.ByteBuffer, obj?:ConfigVersions):ConfigVersions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ConfigVersions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

dynamicOfferConfigVersion():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

dynamicOfferUserSegmentVersion():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

lavaQuestConfigVersion():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

dynamicOfferConfigVersionList(index: number, obj?:DynamicOfferConfigVersion):DynamicOfferConfigVersion|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new DynamicOfferConfigVersion()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

dynamicOfferConfigVersionListLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startConfigVersions(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addDynamicOfferConfigVersion(builder:flatbuffers.Builder, dynamicOfferConfigVersion:number) {
  builder.addFieldInt16(0, dynamicOfferConfigVersion, 0);
}

static addDynamicOfferUserSegmentVersion(builder:flatbuffers.Builder, dynamicOfferUserSegmentVersion:number) {
  builder.addFieldInt16(1, dynamicOfferUserSegmentVersion, 0);
}

static addLavaQuestConfigVersion(builder:flatbuffers.Builder, lavaQuestConfigVersion:number) {
  builder.addFieldInt32(2, lavaQuestConfigVersion, 0);
}

static addDynamicOfferConfigVersionList(builder:flatbuffers.Builder, dynamicOfferConfigVersionListOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, dynamicOfferConfigVersionListOffset, 0);
}

static createDynamicOfferConfigVersionListVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startDynamicOfferConfigVersionListVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endConfigVersions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createConfigVersions(builder:flatbuffers.Builder, dynamicOfferConfigVersion:number, dynamicOfferUserSegmentVersion:number, lavaQuestConfigVersion:number, dynamicOfferConfigVersionListOffset:flatbuffers.Offset):flatbuffers.Offset {
  ConfigVersions.startConfigVersions(builder);
  ConfigVersions.addDynamicOfferConfigVersion(builder, dynamicOfferConfigVersion);
  ConfigVersions.addDynamicOfferUserSegmentVersion(builder, dynamicOfferUserSegmentVersion);
  ConfigVersions.addLavaQuestConfigVersion(builder, lavaQuestConfigVersion);
  ConfigVersions.addDynamicOfferConfigVersionList(builder, dynamicOfferConfigVersionListOffset);
  return ConfigVersions.endConfigVersions(builder);
}
}
