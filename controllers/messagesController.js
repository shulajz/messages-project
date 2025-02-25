import { v4 as uuidv4 } from "uuid";
import { isPalindrome } from "../utils/utils.js";

// Mock database
let messages = [];

// Get all messages
export const getMessages = (req, res) => {
  res.json(messages);
};

// Get message by ID
export const getMessageById = (req, res) => {
  const { id } = req.params;
  const foundMessage = messages.find((msg) => msg.id === id);

  if (!foundMessage) {
    return res.status(404).json({ error: "Message not found" });
  }

  res.json(foundMessage);
};

// Create a new message
export const createMessage = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message content is required" });
  }

  const newMessage = {
    id: uuidv4(),
    message,
    is_palindrome: isPalindrome(message),
  };
  messages.push(newMessage);

  res.status(201).json({
    message: "Message added successfully",
    data: newMessage,
  });
};

// Delete a message
export const deleteMessage = (req, res) => {
  const { id } = req.params;
  const initialLength = messages.length;
  messages = messages.filter((msg) => msg.id !== id);

  if (messages.length === initialLength) {
    return res.status(404).json({ error: "Message not found" });
  }

  res.json({ message: `Message ${id} deleted successfully` });
};

// Update a message
export const updateMessage = (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  const index = messages.findIndex((msg) => msg.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Message not found" });
  }

  messages[index] = {
    ...messages[index],
    message,
    is_palindrome: isPalindrome(message),
  };

  res.json({
    message: `Message ${id} updated successfully`,
    data: messages[index],
  });
};
