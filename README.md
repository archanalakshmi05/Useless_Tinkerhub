# Useless_Tinkerhub

Here’s a basic `README.md` for your chatbot project. This file provides an overview, setup instructions, and usage details.

---

# Useless Hack Chatbot Project

This project is a chatbot application that integrates memory functionality, Google Maps API for location-based responses, and MongoDB for storing chat history and user interactions. It is built using Node.js, Express, and React with Mongoose for database interactions.

## Features
- **Memory Storage**: Saves user interactions and context, allowing for a more personalized conversation.
- **Google Maps Integration**: Fetches location information and images based on user input.
- **Database Persistence**: Uses MongoDB to store chat history, user data, and location details.

## Prerequisites
- **Node.js** (v16 or later)
- **MongoDB** (running locally or on MongoDB Atlas)
- **Google Cloud Platform API Key** (for Google Maps integration)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/archanalakshmi05/useless-hack-chatbot.git
   cd useless-hack-chatbot
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up MongoDB**:
   - Make sure MongoDB is installed and running.
   - Modify the `mongoose.connect` URI in `database.js` if using a remote MongoDB instance.

4. **Configure Google Maps API**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Enable the Google Maps API and obtain an API key.
   - Update the API key in `mapsHandler.js` with your actual key.

5. **Create Required Files**:
   - Ensure `server.js`, `chatbot.js`, `mapsHandler.js`, and `database.js` are in the project root with the provided configurations.

## Project Structure
```
Useless_hack/
├── ChatBot.css         # CSS for the chatbot interface
├── chatbot.js          # Main React component for the chatbot
├── database.js         # MongoDB connection and schema definition
├── mapsHandler.js      # Google Maps API integration functions
├── package.json        # Project dependencies and metadata
├── server.js           # Express server to run the chatbot API
└── README.md           # Project documentation
```

## Usage

1. **Start MongoDB**:
   Make sure MongoDB is running on your machine or accessible through the specified URI.

2. **Run the Server**:
   ```bash
   node server.js
   ```

3. **Access the Chatbot**:
   Open a browser and go to `http://localhost:3000` (or `http://localhost:<PORT>` if you specified a different port).

4. **Using the Chatbot**:
   - Enter messages in the chat interface to interact with the bot.
   - To search for a location, type a message like "Find location [place name]." The bot will retrieve information and an image if available.

## Additional Notes

- **Error Handling**:
  - If you encounter `EADDRINUSE` errors, change the port in `server.js` or free up the port using the methods mentioned above.
  - MongoDB connection issues can typically be resolved by verifying the MongoDB server status or adjusting the connection string.

- **Debugging**:
  - Use `node --trace-warnings server.js` for more detailed error messages if you encounter deprecation or runtime warnings.

## License
This project is licensed under the MIT License.

---

### Author
Archana Lakshmi -archanalakshmi05(https://github.com/archanalakshmi05)
Gokul H V- gokulhv24@gmail.com
Dilsha K- dilshak2001@gmail.com

---
