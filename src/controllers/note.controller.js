// src/controllers/note.controller.js
import LoveNote from "../models/LoveNote.js";

export const createNote = async (req, res) => {
  try {
    const { name = "Guest", message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ success: false, message: "Message is required" });
    }

    await LoveNote.create({ name, message: message.trim() });

    res.status(201).json({ success: true, message: "Note submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to submit note" });
  }
};

export const getApprovedNotes = async (_, res) => {
  try {
    const notes = await LoveNote.find({ approved: true }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch notes" });
  }
};