/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.com.rallyhealth.mothership.Contact');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.com.rallyhealth.mothership.Address');
goog.require('proto.com.rallyhealth.mothership.Phone');
goog.require('proto.com.rallyhealth.mothership.UUID');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.rallyhealth.mothership.Contact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.rallyhealth.mothership.Contact.repeatedFields_, null);
};
goog.inherits(proto.com.rallyhealth.mothership.Contact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.rallyhealth.mothership.Contact.displayName = 'proto.com.rallyhealth.mothership.Contact';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.rallyhealth.mothership.Contact.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.rallyhealth.mothership.Contact.prototype.toObject = function(opt_includeInstance) {
  return proto.com.rallyhealth.mothership.Contact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.rallyhealth.mothership.Contact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rallyhealth.mothership.Contact.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.com.rallyhealth.mothership.UUID.toObject(includeInstance, f),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    middleName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    phoneList: jspb.Message.toObjectList(msg.getPhoneList(),
    proto.com.rallyhealth.mothership.Phone.toObject, includeInstance),
    addressList: jspb.Message.toObjectList(msg.getAddressList(),
    proto.com.rallyhealth.mothership.Address.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.rallyhealth.mothership.Contact}
 */
proto.com.rallyhealth.mothership.Contact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.rallyhealth.mothership.Contact;
  return proto.com.rallyhealth.mothership.Contact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.rallyhealth.mothership.Contact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.rallyhealth.mothership.Contact}
 */
proto.com.rallyhealth.mothership.Contact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.rallyhealth.mothership.UUID;
      reader.readMessage(value,proto.com.rallyhealth.mothership.UUID.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiddleName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = new proto.com.rallyhealth.mothership.Phone;
      reader.readMessage(value,proto.com.rallyhealth.mothership.Phone.deserializeBinaryFromReader);
      msg.addPhone(value);
      break;
    case 6:
      var value = new proto.com.rallyhealth.mothership.Address;
      reader.readMessage(value,proto.com.rallyhealth.mothership.Address.deserializeBinaryFromReader);
      msg.addAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.rallyhealth.mothership.Contact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.rallyhealth.mothership.Contact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.rallyhealth.mothership.Contact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rallyhealth.mothership.Contact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.rallyhealth.mothership.UUID.serializeBinaryToWriter
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMiddleName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPhoneList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.com.rallyhealth.mothership.Phone.serializeBinaryToWriter
    );
  }
  f = message.getAddressList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.com.rallyhealth.mothership.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional UUID id = 1;
 * @return {?proto.com.rallyhealth.mothership.UUID}
 */
proto.com.rallyhealth.mothership.Contact.prototype.getId = function() {
  return /** @type{?proto.com.rallyhealth.mothership.UUID} */ (
    jspb.Message.getWrapperField(this, proto.com.rallyhealth.mothership.UUID, 1));
};


/** @param {?proto.com.rallyhealth.mothership.UUID|undefined} value */
proto.com.rallyhealth.mothership.Contact.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.com.rallyhealth.mothership.Contact.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.com.rallyhealth.mothership.Contact.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Contact.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Contact.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string middle_name = 3;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Contact.prototype.getMiddleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Contact.prototype.setMiddleName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Contact.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Contact.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Phone phone = 5;
 * @return {!Array<!proto.com.rallyhealth.mothership.Phone>}
 */
proto.com.rallyhealth.mothership.Contact.prototype.getPhoneList = function() {
  return /** @type{!Array<!proto.com.rallyhealth.mothership.Phone>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.rallyhealth.mothership.Phone, 5));
};


/** @param {!Array<!proto.com.rallyhealth.mothership.Phone>} value */
proto.com.rallyhealth.mothership.Contact.prototype.setPhoneList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.com.rallyhealth.mothership.Phone=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.rallyhealth.mothership.Phone}
 */
proto.com.rallyhealth.mothership.Contact.prototype.addPhone = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.com.rallyhealth.mothership.Phone, opt_index);
};


proto.com.rallyhealth.mothership.Contact.prototype.clearPhoneList = function() {
  this.setPhoneList([]);
};


/**
 * repeated Address address = 6;
 * @return {!Array<!proto.com.rallyhealth.mothership.Address>}
 */
proto.com.rallyhealth.mothership.Contact.prototype.getAddressList = function() {
  return /** @type{!Array<!proto.com.rallyhealth.mothership.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.rallyhealth.mothership.Address, 6));
};


/** @param {!Array<!proto.com.rallyhealth.mothership.Address>} value */
proto.com.rallyhealth.mothership.Contact.prototype.setAddressList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.com.rallyhealth.mothership.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.rallyhealth.mothership.Address}
 */
proto.com.rallyhealth.mothership.Contact.prototype.addAddress = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.com.rallyhealth.mothership.Address, opt_index);
};


proto.com.rallyhealth.mothership.Contact.prototype.clearAddressList = function() {
  this.setAddressList([]);
};


