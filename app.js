import express from "express";
import messageRoutes from "./routes/messages.js";

const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use("/messages", messageRoutes);

export default app;
