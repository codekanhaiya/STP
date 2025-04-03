const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsShema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
