import express from "express";
import {
  signUpuserWithEmailAndPassword,
  signInuserWithEmailAndPassword,
  signInWithGoogle,
  signOut,
} from "../controllers/Auth";

const router = express.Router();

router.post("/signUpWithEmailAndPassword", async (req, res) => {
  try {
    const { email, password } = req.body;
    await signUpuserWithEmailAndPassword(email, password);

    return res.json({ message: "User Created Successfully" });
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/signInWithEmailAndPassword", async(req, res) => {
  try {
    const { email, password } = req.body;
    await signInuserWithEmailAndPassword(email, password);

    return res.json({ message: "Login Success" });
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;