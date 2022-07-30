const { Schema, model } = require("mongoose");

const formatDate = (date) => {
  return dayjs(date).format("M/D/YYYY h:mm a");
};

const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: [280, "Must be between 1 to 280 characters"],
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: formatDate,
  },
});

const Reaction = model("Reactions", reactionSchema);

module.exports = Reaction;