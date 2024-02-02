const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("db connected"))
      .catch((err) => {
        throw new Error("Error While db connection\n" + err.stack);
      });
  } catch (err) {
    console.log(err.stack);
  }
};

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    chats: [{ type: mongoose.Types.ObjectId, ref: "Chat" }],
  },
  { timestamps: true }
);

const AdminSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ChatSchema = mongoose.Schema({
  title: {
    type: String,
    required: false,
    default: "New Chat",
  },
});

const User = mongoose.model("user", UserSchema);
const Admin = mongoose.model("admin", AdminSchema);
const Chat = mongoose.model("chat", ChatSchema);

module.exports = {
  connectDB,
  User,
  Admin,
  Chat,
};
