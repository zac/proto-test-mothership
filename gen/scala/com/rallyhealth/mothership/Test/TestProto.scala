// Generated by the Scala Plugin for the Protocol Buffer Compiler.
// Do not edit!
//
// Protofile syntax: PROTO3

package com.rallyhealth.mothership.Test

object TestProto extends _root_.scalapb.GeneratedFileObject {
  lazy val dependencies: Seq[_root_.scalapb.GeneratedFileObject] = Seq(
  )
  lazy val messagesCompanions: Seq[_root_.scalapb.GeneratedMessageCompanion[_]] = Seq(
    com.rallyhealth.mothership.Test.UUID,
    com.rallyhealth.mothership.Test.Contact,
    com.rallyhealth.mothership.Test.Address,
    com.rallyhealth.mothership.Test.Phone
  )
  private lazy val ProtoBytes: Array[Byte] =
      scalapb.Encoding.fromBase64(scala.collection.Seq(
  """ChFwcm90b3MvVGVzdC5wcm90bxIaY29tLnJhbGx5aGVhbHRoLm1vdGhlcnNoaXAiFgoEVVVJRBIOCgJpZBgBIAEoCVICaWQik
  AIKB0NvbnRhY3QSMAoCaWQYASABKAsyIC5jb20ucmFsbHloZWFsdGgubW90aGVyc2hpcC5VVUlEUgJpZBIdCgpmaXJzdF9uYW1lG
  AIgASgJUglmaXJzdE5hbWUSHwoLbWlkZGxlX25hbWUYAyABKAlSCm1pZGRsZU5hbWUSGwoJbGFzdF9uYW1lGAQgASgJUghsYXN0T
  mFtZRI3CgVwaG9uZRgFIAMoCzIhLmNvbS5yYWxseWhlYWx0aC5tb3RoZXJzaGlwLlBob25lUgVwaG9uZRI9CgdhZGRyZXNzGAYgA
  ygLMiMuY29tLnJhbGx5aGVhbHRoLm1vdGhlcnNoaXAuQWRkcmVzc1IHYWRkcmVzcyLmAgoHQWRkcmVzcxIwCgJpZBgBIAEoCzIgL
  mNvbS5yYWxseWhlYWx0aC5tb3RoZXJzaGlwLlVVSURSAmlkEiIKDXN0cmVldF9saW5lXzEYAiABKAlSC3N0cmVldExpbmUxEiIKD
  XN0cmVldF9saW5lXzIYAyABKAlSC3N0cmVldExpbmUyEhIKBGNpdHkYBCABKAlSBGNpdHkSFAoFc3RhdGUYBSABKAlSBXN0YXRlE
  hAKA3ppcBgGIAEoCVIDemlwEhgKB2NvdW50cnkYByABKAlSB2NvdW50cnkSRgoFbGFiZWwYCCABKA4yMC5jb20ucmFsbHloZWFsd
  GgubW90aGVyc2hpcC5BZGRyZXNzLkFkZHJlc3NMYWJlbFIFbGFiZWwiQwoMQWRkcmVzc0xhYmVsEggKBE5PTkUQABIJCgVPVEhFU
  hABEggKBEhPTUUQAhIICgRXT1JLEAMSCgoGRE9DVE9SEAQirwIKBVBob25lEjAKAmlkGAEgASgLMiAuY29tLnJhbGx5aGVhbHRoL
  m1vdGhlcnNoaXAuVVVJRFICaWQSIQoMY291bnRyeV9jb2RlGAIgASgJUgtjb3VudHJ5Q29kZRIfCgthcmVhX251bWJlchgDIAEoC
  VIKYXJlYU51bWJlchIhCgxwaG9uZV9udW1iZXIYBCABKAlSC3Bob25lTnVtYmVyEj8KBHR5cGUYBSABKA4yKy5jb20ucmFsbHloZ
  WFsdGgubW90aGVyc2hpcC5QaG9uZS5QaG9uZVR5cGVSBHR5cGUiTAoJUGhvbmVUeXBlEggKBE5PTkUQABIJCgVPVEhFUhABEgoKB
  k1PQklMRRACEgwKCExBTkRMSU5FEAMSBwoDRkFYEAQSBwoDVFRZEAViBnByb3RvMw=="""
      ).mkString)
  lazy val scalaDescriptor: _root_.scalapb.descriptors.FileDescriptor = {
    val scalaProto = com.google.protobuf.descriptor.FileDescriptorProto.parseFrom(ProtoBytes)
    _root_.scalapb.descriptors.FileDescriptor.buildFrom(scalaProto, dependencies.map(_.scalaDescriptor))
  }
  lazy val javaDescriptor: com.google.protobuf.Descriptors.FileDescriptor = {
    val javaProto = com.google.protobuf.DescriptorProtos.FileDescriptorProto.parseFrom(ProtoBytes)
    com.google.protobuf.Descriptors.FileDescriptor.buildFrom(javaProto, Array(
    ))
  }
  @deprecated("Use javaDescriptor instead. In a future version this will refer to scalaDescriptor.", "ScalaPB 0.5.47")
  def descriptor: com.google.protobuf.Descriptors.FileDescriptor = javaDescriptor
}