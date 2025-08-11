const express = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    email,
  });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "User already exist!",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    PasswordHash: hash,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  return res.status(201).json({
    message: "user registered successfully",
  });
}

async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  // if user na mile toh
  if (!user) {
    return res.status(400).json({
      message: "User not found!",
    });
  }

  // agar user mile toh check karo ki password barobar hai ki nahi

  const ok = await bcrypt.compare(password, user.PasswordHash);

  if (!ok) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie('token',token)

  res.json({
    message:'User logged in successfully!',
    user:{
        id:user._id,
        username:user.username,
        email:user.email
    }
  })
}

module.exports = { registerController, loginController };
