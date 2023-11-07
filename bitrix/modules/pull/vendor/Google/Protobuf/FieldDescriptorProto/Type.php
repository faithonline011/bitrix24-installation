<?php
/**
 * Generated by Protobuf protoc plugin.
 *
 * File descriptor : descriptor.proto
 */


namespace google\protobuf\FieldDescriptorProto;

/**
 * Protobuf enum : google.protobuf.FieldDescriptorProto.Type
 */
class Type extends \Protobuf\Enum
{

    /**
     * TYPE_DOUBLE = 1
     */
    const TYPE_DOUBLE_VALUE = 1;

    /**
     * TYPE_FLOAT = 2
     */
    const TYPE_FLOAT_VALUE = 2;

    /**
     * TYPE_INT64 = 3
     */
    const TYPE_INT64_VALUE = 3;

    /**
     * TYPE_UINT64 = 4
     */
    const TYPE_UINT64_VALUE = 4;

    /**
     * TYPE_INT32 = 5
     */
    const TYPE_INT32_VALUE = 5;

    /**
     * TYPE_FIXED64 = 6
     */
    const TYPE_FIXED64_VALUE = 6;

    /**
     * TYPE_FIXED32 = 7
     */
    const TYPE_FIXED32_VALUE = 7;

    /**
     * TYPE_BOOL = 8
     */
    const TYPE_BOOL_VALUE = 8;

    /**
     * TYPE_STRING = 9
     */
    const TYPE_STRING_VALUE = 9;

    /**
     * TYPE_GROUP = 10
     */
    const TYPE_GROUP_VALUE = 10;

    /**
     * TYPE_MESSAGE = 11
     */
    const TYPE_MESSAGE_VALUE = 11;

    /**
     * TYPE_BYTES = 12
     */
    const TYPE_BYTES_VALUE = 12;

    /**
     * TYPE_UINT32 = 13
     */
    const TYPE_UINT32_VALUE = 13;

    /**
     * TYPE_ENUM = 14
     */
    const TYPE_ENUM_VALUE = 14;

    /**
     * TYPE_SFIXED32 = 15
     */
    const TYPE_SFIXED32_VALUE = 15;

    /**
     * TYPE_SFIXED64 = 16
     */
    const TYPE_SFIXED64_VALUE = 16;

    /**
     * TYPE_SINT32 = 17
     */
    const TYPE_SINT32_VALUE = 17;

    /**
     * TYPE_SINT64 = 18
     */
    const TYPE_SINT64_VALUE = 18;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_DOUBLE = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_FLOAT = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_INT64 = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_UINT64 = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_INT32 = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_FIXED64 = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_FIXED32 = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_BOOL = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_STRING = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_GROUP = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_MESSAGE = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_BYTES = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_UINT32 = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_ENUM = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_SFIXED32 = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_SFIXED64 = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_SINT32 = null;

    /**
     * @var \google\protobuf\FieldDescriptorProto\Type
     */
    protected static $TYPE_SINT64 = null;

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_DOUBLE()
    {
        if (self::$TYPE_DOUBLE !== null) {
            return self::$TYPE_DOUBLE;
        }

        return self::$TYPE_DOUBLE = new self('TYPE_DOUBLE', self::TYPE_DOUBLE_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_FLOAT()
    {
        if (self::$TYPE_FLOAT !== null) {
            return self::$TYPE_FLOAT;
        }

        return self::$TYPE_FLOAT = new self('TYPE_FLOAT', self::TYPE_FLOAT_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_INT64()
    {
        if (self::$TYPE_INT64 !== null) {
            return self::$TYPE_INT64;
        }

        return self::$TYPE_INT64 = new self('TYPE_INT64', self::TYPE_INT64_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_UINT64()
    {
        if (self::$TYPE_UINT64 !== null) {
            return self::$TYPE_UINT64;
        }

        return self::$TYPE_UINT64 = new self('TYPE_UINT64', self::TYPE_UINT64_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_INT32()
    {
        if (self::$TYPE_INT32 !== null) {
            return self::$TYPE_INT32;
        }

        return self::$TYPE_INT32 = new self('TYPE_INT32', self::TYPE_INT32_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_FIXED64()
    {
        if (self::$TYPE_FIXED64 !== null) {
            return self::$TYPE_FIXED64;
        }

        return self::$TYPE_FIXED64 = new self('TYPE_FIXED64', self::TYPE_FIXED64_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_FIXED32()
    {
        if (self::$TYPE_FIXED32 !== null) {
            return self::$TYPE_FIXED32;
        }

        return self::$TYPE_FIXED32 = new self('TYPE_FIXED32', self::TYPE_FIXED32_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_BOOL()
    {
        if (self::$TYPE_BOOL !== null) {
            return self::$TYPE_BOOL;
        }

        return self::$TYPE_BOOL = new self('TYPE_BOOL', self::TYPE_BOOL_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_STRING()
    {
        if (self::$TYPE_STRING !== null) {
            return self::$TYPE_STRING;
        }

        return self::$TYPE_STRING = new self('TYPE_STRING', self::TYPE_STRING_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_GROUP()
    {
        if (self::$TYPE_GROUP !== null) {
            return self::$TYPE_GROUP;
        }

        return self::$TYPE_GROUP = new self('TYPE_GROUP', self::TYPE_GROUP_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_MESSAGE()
    {
        if (self::$TYPE_MESSAGE !== null) {
            return self::$TYPE_MESSAGE;
        }

        return self::$TYPE_MESSAGE = new self('TYPE_MESSAGE', self::TYPE_MESSAGE_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_BYTES()
    {
        if (self::$TYPE_BYTES !== null) {
            return self::$TYPE_BYTES;
        }

        return self::$TYPE_BYTES = new self('TYPE_BYTES', self::TYPE_BYTES_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_UINT32()
    {
        if (self::$TYPE_UINT32 !== null) {
            return self::$TYPE_UINT32;
        }

        return self::$TYPE_UINT32 = new self('TYPE_UINT32', self::TYPE_UINT32_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_ENUM()
    {
        if (self::$TYPE_ENUM !== null) {
            return self::$TYPE_ENUM;
        }

        return self::$TYPE_ENUM = new self('TYPE_ENUM', self::TYPE_ENUM_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_SFIXED32()
    {
        if (self::$TYPE_SFIXED32 !== null) {
            return self::$TYPE_SFIXED32;
        }

        return self::$TYPE_SFIXED32 = new self('TYPE_SFIXED32', self::TYPE_SFIXED32_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_SFIXED64()
    {
        if (self::$TYPE_SFIXED64 !== null) {
            return self::$TYPE_SFIXED64;
        }

        return self::$TYPE_SFIXED64 = new self('TYPE_SFIXED64', self::TYPE_SFIXED64_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_SINT32()
    {
        if (self::$TYPE_SINT32 !== null) {
            return self::$TYPE_SINT32;
        }

        return self::$TYPE_SINT32 = new self('TYPE_SINT32', self::TYPE_SINT32_VALUE);
    }

    /**
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function TYPE_SINT64()
    {
        if (self::$TYPE_SINT64 !== null) {
            return self::$TYPE_SINT64;
        }

        return self::$TYPE_SINT64 = new self('TYPE_SINT64', self::TYPE_SINT64_VALUE);
    }

    /**
     * @param int $value
     * @return \google\protobuf\FieldDescriptorProto\Type
     */
    public static function valueOf($value)
    {
        switch ($value) {
            case 1: return self::TYPE_DOUBLE();
            case 2: return self::TYPE_FLOAT();
            case 3: return self::TYPE_INT64();
            case 4: return self::TYPE_UINT64();
            case 5: return self::TYPE_INT32();
            case 6: return self::TYPE_FIXED64();
            case 7: return self::TYPE_FIXED32();
            case 8: return self::TYPE_BOOL();
            case 9: return self::TYPE_STRING();
            case 10: return self::TYPE_GROUP();
            case 11: return self::TYPE_MESSAGE();
            case 12: return self::TYPE_BYTES();
            case 13: return self::TYPE_UINT32();
            case 14: return self::TYPE_ENUM();
            case 15: return self::TYPE_SFIXED32();
            case 16: return self::TYPE_SFIXED64();
            case 17: return self::TYPE_SINT32();
            case 18: return self::TYPE_SINT64();
            default: return null;
        }
    }


}
