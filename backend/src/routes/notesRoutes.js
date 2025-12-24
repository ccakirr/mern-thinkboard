import express from "express";
import {
  addNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNote);

router.post("/", addNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
