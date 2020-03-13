const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let OrderSchema = new Schema(
  {
    name: {
      type: String,
      required: "missing"
    },
    items: {
      type: Array,
      required: "missing 2"
    },
    tax: {
      type: Number
    },
    total: {
      type: Number
    }
  },
  { versionkey: false }
);

// get virtual attribute
OrderSchema.virtual("id").get(function() {
  return this._id.toHexString();
});
// when use toJSON to convert, it will contain virtuals attribute
OrderSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("order", OrderSchema);
