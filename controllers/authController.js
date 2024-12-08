import User from "../models/user.js";
import jwt from "jsonwebtoken";

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const useExist = await User.findOne({ email });

    if (useExist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const user = new User({ name, email, password, role });
    await user.save();
    const token = generateToken(user._id, user.role);
    res.status(201).json({ token, user: { id: user._id, role: user.role } });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user._id, user.role);
    res.status(200).json({ token, user: { id: user._id, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

