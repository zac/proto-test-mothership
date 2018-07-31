/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.com.rallyhealth.mothership.Address');
goog.provide('proto.com.rallyhealth.mothership.Address.AddressLabel');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
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
proto.com.rallyhealth.mothership.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.rallyhealth.mothership.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.rallyhealth.mothership.Address.displayName = 'proto.com.rallyhealth.mothership.Address';
}


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
proto.com.rallyhealth.mothership.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.com.rallyhealth.mothership.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.rallyhealth.mothership.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rallyhealth.mothership.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.com.rallyhealth.mothership.UUID.toObject(includeInstance, f),
    streetLine1: jspb.Message.getFieldWithDefault(msg, 2, ""),
    streetLine2: jspb.Message.getFieldWithDefault(msg, 3, ""),
    city: jspb.Message.getFieldWithDefault(msg, 4, ""),
    state: jspb.Message.getFieldWithDefault(msg, 5, ""),
    zip: jspb.Message.getFieldWithDefault(msg, 6, ""),
    country: jspb.Message.getFieldWithDefault(msg, 7, ""),
    label: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.com.rallyhealth.mothership.Address}
 */
proto.com.rallyhealth.mothership.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.rallyhealth.mothership.Address;
  return proto.com.rallyhealth.mothership.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.rallyhealth.mothership.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.rallyhealth.mothership.Address}
 */
proto.com.rallyhealth.mothership.Address.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStreetLine1(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreetLine2(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setZip(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 8:
      var value = /** @type {!proto.com.rallyhealth.mothership.Address.AddressLabel} */ (reader.readEnum());
      msg.setLabel(value);
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
proto.com.rallyhealth.mothership.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.rallyhealth.mothership.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.rallyhealth.mothership.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rallyhealth.mothership.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.rallyhealth.mothership.UUID.serializeBinaryToWriter
    );
  }
  f = message.getStreetLine1();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStreetLine2();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getZip();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLabel();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.com.rallyhealth.mothership.Address.AddressLabel = {
  NONE: 0,
  OTHER: 1,
  HOME: 2,
  WORK: 3,
  DOCTOR: 4
};

/**
 * optional UUID id = 1;
 * @return {?proto.com.rallyhealth.mothership.UUID}
 */
proto.com.rallyhealth.mothership.Address.prototype.getId = function() {
  return /** @type{?proto.com.rallyhealth.mothership.UUID} */ (
    jspb.Message.getWrapperField(this, proto.com.rallyhealth.mothership.UUID, 1));
};


/** @param {?proto.com.rallyhealth.mothership.UUID|undefined} value */
proto.com.rallyhealth.mothership.Address.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.com.rallyhealth.mothership.Address.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.com.rallyhealth.mothership.Address.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string street_line_1 = 2;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Address.prototype.getStreetLine1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Address.prototype.setStreetLine1 = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string street_line_2 = 3;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Address.prototype.getStreetLine2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Address.prototype.setStreetLine2 = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string city = 4;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Address.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Address.prototype.setCity = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string state = 5;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Address.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Address.prototype.setState = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string zip = 6;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Address.prototype.getZip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Address.prototype.setZip = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string country = 7;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Address.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Address.prototype.setCountry = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional AddressLabel label = 8;
 * @return {!proto.com.rallyhealth.mothership.Address.AddressLabel}
 */
proto.com.rallyhealth.mothership.Address.prototype.getLabel = function() {
  return /** @type {!proto.com.rallyhealth.mothership.Address.AddressLabel} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.com.rallyhealth.mothership.Address.AddressLabel} value */
proto.com.rallyhealth.mothership.Address.prototype.setLabel = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


