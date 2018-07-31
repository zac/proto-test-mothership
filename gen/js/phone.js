/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.com.rallyhealth.mothership.Phone');
goog.provide('proto.com.rallyhealth.mothership.Phone.PhoneType');

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
proto.com.rallyhealth.mothership.Phone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.rallyhealth.mothership.Phone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.rallyhealth.mothership.Phone.displayName = 'proto.com.rallyhealth.mothership.Phone';
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
proto.com.rallyhealth.mothership.Phone.prototype.toObject = function(opt_includeInstance) {
  return proto.com.rallyhealth.mothership.Phone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.rallyhealth.mothership.Phone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rallyhealth.mothership.Phone.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.com.rallyhealth.mothership.UUID.toObject(includeInstance, f),
    countryCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    areaNumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.com.rallyhealth.mothership.Phone}
 */
proto.com.rallyhealth.mothership.Phone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.rallyhealth.mothership.Phone;
  return proto.com.rallyhealth.mothership.Phone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.rallyhealth.mothership.Phone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.rallyhealth.mothership.Phone}
 */
proto.com.rallyhealth.mothership.Phone.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCountryCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAreaNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 5:
      var value = /** @type {!proto.com.rallyhealth.mothership.Phone.PhoneType} */ (reader.readEnum());
      msg.setType(value);
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
proto.com.rallyhealth.mothership.Phone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.rallyhealth.mothership.Phone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.rallyhealth.mothership.Phone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rallyhealth.mothership.Phone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.rallyhealth.mothership.UUID.serializeBinaryToWriter
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAreaNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.com.rallyhealth.mothership.Phone.PhoneType = {
  NONE: 0,
  OTHER: 1,
  MOBILE: 2,
  LANDLINE: 3,
  FAX: 4,
  TTY: 5
};

/**
 * optional UUID id = 1;
 * @return {?proto.com.rallyhealth.mothership.UUID}
 */
proto.com.rallyhealth.mothership.Phone.prototype.getId = function() {
  return /** @type{?proto.com.rallyhealth.mothership.UUID} */ (
    jspb.Message.getWrapperField(this, proto.com.rallyhealth.mothership.UUID, 1));
};


/** @param {?proto.com.rallyhealth.mothership.UUID|undefined} value */
proto.com.rallyhealth.mothership.Phone.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.com.rallyhealth.mothership.Phone.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.com.rallyhealth.mothership.Phone.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string country_code = 2;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Phone.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Phone.prototype.setCountryCode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string area_number = 3;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Phone.prototype.getAreaNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Phone.prototype.setAreaNumber = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phone_number = 4;
 * @return {string}
 */
proto.com.rallyhealth.mothership.Phone.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.com.rallyhealth.mothership.Phone.prototype.setPhoneNumber = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional PhoneType type = 5;
 * @return {!proto.com.rallyhealth.mothership.Phone.PhoneType}
 */
proto.com.rallyhealth.mothership.Phone.prototype.getType = function() {
  return /** @type {!proto.com.rallyhealth.mothership.Phone.PhoneType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.com.rallyhealth.mothership.Phone.PhoneType} value */
proto.com.rallyhealth.mothership.Phone.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


