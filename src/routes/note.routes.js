import express from "express";
import { createNote, getApprovedNotes } from "../controllers/note.controller.js";

const router = express.Router();
router.post("/", createNote);
router.get("/", getApprovedNotes);

export default router;

