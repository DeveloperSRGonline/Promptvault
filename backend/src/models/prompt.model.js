const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  promptText: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isPublic: { type: Boolean, default: false },
});

const promptModel = mongoose.model("prompt", promptSchema);

module.exports = promptModel;
