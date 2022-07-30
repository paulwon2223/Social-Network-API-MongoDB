const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction")

const formatDate = (date) => {
  return dayjs(date).format("M/D/YYYY h:mm a");
};

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: [1, "Must have at least one character"],
    maxLength: [280, "Must be less than 280 characters"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: formatDate,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
