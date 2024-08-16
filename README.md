# Discord Bot

This project is a simple Discord bot built using the `discord.js` library. The bot responds to messages and interactions in a Discord server.

## Features

- **Message Handling**: The bot listens for messages and replies based on the content.
- **Interaction Handling**: The bot responds to interactions with a simple "pong" reply.
- **Command Registration**: The bot registers a `/ping` command that replies with "pong".

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- A Discord bot token (set up through the [Discord Developer Portal](https://discord.com/developers/applications))

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/keshavkumar143/Discordbot.git
   cd Discord Bot
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory of the project with the following content:

   ```env
   SECRET_KEY=<your-discord-bot-token>
   CLIENT_ID=<your-discord-client-id>
   ```

4. **Run the bot:**

   ```bash
   nodemon server.js
   ```

### Code Overview

- **`server.js`**: Main bot script that handles message creation and interactions.
  - Listens for `messageCreate` events to handle user messages.
  - Listens for `interactionCreate` events to handle interactions like slash commands.
  - Replies with predefined messages based on user input.

- **`register-commands.js`**: Script to register and update application commands.
  - Uses the `REST` API to register the `/ping` command.
  - Run this script whenever you need to update commands.
