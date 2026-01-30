import express from "express";
import cors from "cors";
import rsvpRoutes from "./routes/rsvp.routes.js";
import noteRoutes from "./routes/note.routes.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://www.aihemma.com.ng"],
    
  })
);

app.use(express.json());

// ✅ Root route (fixes Cannot GET /)
app.get("/", (req, res) => {
  res.send("🚀 Aihanuwa & Emmanuel backend is running");
});

app.use("/api/rsvp", rsvpRoutes);
app.use("/api/notes", noteRoutes);

export default app;
