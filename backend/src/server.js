import "dotenv/config";
import express, { json } from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import logger from "./middleware/logger.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json());

app.use(logger);

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
      ],
    })
  );
}

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Backend started at port: ${PORT}\nWanna check? Go to: http:/localhost:${PORT}`
    );
  });
});
