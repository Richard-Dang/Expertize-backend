const Resume = require("../models/resume");
const User = require("../models/user");
const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const addResume = async (root, args, { currentUser }) => {
  // if (!currentUser) {
  //   throw new AuthenticationError("Not authenticated");
  // }
  // const authors = await Author.find({});
  // let author = null;
  // if (authors.find((a) => a.name === args.author)) {
  //   author = await Author.findOne({ name: args.author });
  //   author.numBooks += 1;
  // } else {
  //   const newAuthor = {
  //     name: args.author,
  //     born: null,
  //     numBooks: 1,
  //   };
  //   author = new Author(newAuthor);
  // }
  // if (author) {
  //   const book = new Book({ ...args, author });
  //   try {
  //     await book.save();
  //     await author.save();
  //   } catch (error) {
  //     throw new UserInputError(error.message, {
  //       invalidArgs: args,
  //     });
  //   }
  //   pubsub.publish("BOOK_ADDED", { bookAdded: book });
  //   return book;
  // }
};

const signup = async (root, args) => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(args.password, saltRounds);

  try {
    const user = new User({ ...args, password: passwordHash });
    const savedUser = await user.save();
    return savedUser.toJSON();
  } catch (error) {
    throw new UserInputError(error.message);
  }
};

const login = async (root, { username, password }) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new UserInputError("Invalid credentials");
  }

  const validPassword = bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new UserInputError("Invalid credentials");
  }

  const token = jwt.sign(
    { username: user.username, id: user._id },
    config.JWT_SECRET
  );

  return {
    token,
    username: user.username,
  };
};

module.exports = { addResume, signup, login };
