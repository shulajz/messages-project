import express from "express";
import {
  getMessages,
  getMessageById,
  createMessage,
  deleteMessage,
  updateMessage,
} from "../controllers/messagesController.js";

const router = express.Router();

router.get("/", getMessages);
router.get("/:id", getMessageById);
router.post("/", createMessage);
router.delete("/:id", deleteMessage);
router.put("/:id", updateMessage);

export default router;
