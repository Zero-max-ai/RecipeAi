const jwt = require("jsonwebtoken");
const { User } = require("../db/index");
const bcrpyt = require("bcryptjs");

//  signup route with jwt creatiion for user
const jwtSignUp = async (req, res, next) => {
  // empty fields loc
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.status(400).json({
      message: "please fill all fields",
    });
  }

  // user existsance in db
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "user already exists!" });
  }

  // for new user creating space
  const hashedPassword = passwordHashing(password);
  const newUser = await User.create({
    username,
    password: hashedPassword,
    email,
  });

  // error at user creation
  if (!newUser) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
  next();
};

// login route with jwt verification for user and return
const jwtVerify = async (req, res, next) => {
  const { email, password } = req.body;
  // empty fields validation
  if (!email || !password) {
    return res.status(400).json({
      message: "please fill all fields",
    });
  }
  // new user existance
  const userExists = await User.findOne({ email });
  if (!userExists) {
    return res.status(400).json({ message: "user does not exists!" });
  }
  const rightPass = passwordCompare(password, userExists.password);
  if (!rightPass) {
    return res.status(400).json({
      message: "wrong credentials",
    });
  }
  req.userToken = tokenGenerator(email, password);
  next();
};

const passwordCompare = (password, userPassword) => {
  return bcrpyt.compareSync(password, userPassword);
};

const tokenGenerator = (email, password) => {
  return jwt.sign({ email, password }, process.env.JWT_SECRET, {
    algorithm: "HS512",
  });
};

const passwordHashing = (password) => {
  const salt = bcrpyt.genSaltSync(10);
  const hashedPassword = bcrpyt.hashSync(password, salt);
  return hashedPassword;
};

module.exports = {
  jwtSignUp,
  jwtVerify,
  passwordHashing,
};
