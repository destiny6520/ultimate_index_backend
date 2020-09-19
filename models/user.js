const mongoose = require('mongoose');

// User Database Model
const userSchema = {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    lowercase: true,
  },
  registeredDate: {
    type: Number,
    required: true,
    default: Date.now,
  },
	password: {
    type: String,
    default: null
  },
	temppassword: {
    type: String
  },
	temprestricted: {
    type: Boolean,
    default: false
  },
	role: {
    type: String,
    required: true,
    default: 'user'
  },
	admin: {
    type: Boolean,
    required: true,
    default: false
  },
	superadmin: {
    type: Boolean,
    required: true,
    default: false
  },
	verified: {
    type: Boolean,
    required: true,
    default: false
  },
  session_id1: {
    type: String,
    default: null
  },
  session_id2: {
    type: String,
    default: null
  },
  session_current: {
    type: String,
    default: null
  },
};

const User = mongoose.model("User", userSchema);

module.exports = User;
