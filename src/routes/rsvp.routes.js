import express from "express";
import { createRSVP } from "../controllers/rsvp.controller.js";

const router = express.Router();

router.post("/", createRSVP);

export default router;

