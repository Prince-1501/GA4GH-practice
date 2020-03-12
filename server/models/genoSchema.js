var mongoose = require('mongoose');

var genotypesSchema = new mongoose.Schema({
    _schema: "https://json-schema.org/draft/2019-09/schema",
    _id: "https://json-schema.org/draft/2019-09/meta/validation",
    _vocabulary: {
        "https://json-schema.org/draft/2019-09/vocab/validation": true
    },
    $recursiveAnchor: true,

    title: "Validation vocabulary meta-schema",
    type: [Object, Boolean],
    properties: {
        multipleOf: {
            type: Number,
            exclusiveMinimum: 0
        },
        maximum: {
            type: Number
        },
        exclusiveMaximum: {
            type: Number
        }
    },
    $defs: {
        nonNegativeInteger: {
            type: Number,
            minimum: 0
        },
        nonNegativeIntegerDefault0: {
            $ref: "#/$defs/nonNegativeInteger",
            default: 0
        },
        simpleTypes: {
            enum: [
                Boolean,
                Number,
                Object,
                String
            ]
        },
        stringArray: {
            type: Array,
            items: { type: String },
            uniqueItems: true,
            default: []
        }
    }
});

var Genotypes = mongoose.model('Genotypes',genotypesSchema);

module.exports = {Genotypes};
