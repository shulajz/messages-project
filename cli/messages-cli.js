#!/usr/bin/env node

import { Command } from "commander";
import axios from "axios";
import chalk from "chalk";

const program = new Command();
const API_URL = "http://www.messagesapi.com/messages";

// Create a new message
program
  .command("add <message>")
  .description("Add a new message")
  .action(async (message) => {
    try {
      const response = await axios.post(API_URL, { message });
      console.log(chalk.green("Message added:"), response.data);
    } catch (error) {
      console.error(
        chalk.red("Error adding message:"),
        error.response?.data || error.message
      );
    }
  });

// Get all messages
program
  .command("list")
  .description("List all messages")
  .action(async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(chalk.blue("Messages:"));
      console.table(response.data);
    } catch (error) {
      console.error(
        chalk.red("Error fetching messages:"),
        error.response?.data || error.message
      );
    }
  });

// Get a single message by ID
program
  .command("get <id>")
  .description("Get a message by ID")
  .action(async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      console.log(chalk.blue("Message found:"), response.data);
    } catch (error) {
      console.error(
        chalk.red("Error fetching message:"),
        error.response?.data || error.message
      );
    }
  });

// Update a message
program
  .command("update <id> <message>")
  .description("Update a message by ID")
  .action(async (id, message) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { message });
      console.log(chalk.yellow("Message updated:"), response.data);
    } catch (error) {
      console.error(
        chalk.red("Error updating message:"),
        error.response?.data || error.message
      );
    }
  });

// Delete a message
program
  .command("delete <id>")
  .description("Delete a message by ID")
  .action(async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      console.log(chalk.red("Message deleted:"), response.data);
    } catch (error) {
      console.error(
        chalk.red("Error deleting message:"),
        error.response?.data || error.message
      );
    }
  });

program.parse(process.argv);
