const express = require("express");
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://blog-server:blog-server@cluster0.p2yhtjb.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

const UserSchema = new mongoose.Schema({
  // email: String,
  email: {
    type: String
  },

  password: String,
  firstName: String,
  activated: Boolean,
  createdAt: Date,
  updatedAt: Date
});

//create a model

const User = mongoose.model("User", UserSchema);

const app = express();
app.use(express.json());

app.post("/register", (req, res) => {
  console.log(req.body);
  const { body } = req;

  User.create(body).then((data) => {
    return res.status(201).json({
      status: "success",
      message: "Accounted created",
      data
    });
  });
});

app.get("/users", async (req, res) => {
  const users = await User.find({});
  console.log(users);
});

const PORT = 7000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
