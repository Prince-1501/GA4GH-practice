var schema = {
  "schema": "http://json-schema.org/draft-07/schema#",
  "title": "Attributes",
  "description": "USI submittable attributes schema.",

  "type": "object",
  "properties": {
    "attributes": {
      "description": "Attributes for describing a submittable.",
      "type": "object",
      "properties": {},
      "patternProperties": {
        "^.*$": {
          "type": "array",
          "minItems": 1,
          "items": {
            "properties": {
              "value": { "type": "string", "minLength": 1 },
              "units": { "type": "string", "minLength": 1 },
              "terms": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "url": {"type": "string", "format": "uri" }
                  },
                  "required": ["url"]
                }
              }
            },
            "required": ["value"]
          }
        }
      }
    }
  }
};

module.exports = {schema};
