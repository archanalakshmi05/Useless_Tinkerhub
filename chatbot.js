// ChatBot.js
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './ChatBot.css';
import { ChatMemory } from './database.js';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const userID = useRef(uuidv4()); // Persist user ID across sessions

    // Function to add messages to the chat log
    const addMessage = (text, sender = 'user') => {
        const newMessage = { id: uuidv4(), text, sender };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // Handle user message submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user's message to chat
        addMessage(input);

        // Send the message to the Botpress server
        try {
            const response = await axios.post(
                `http://localhost:3000/api/v1/bots/YOUR_BOT_ID/converse/${userID.current}`,
                { text: input }
            );

            // Add Botpress's response to chat
            response.data.responses.forEach((res) => addMessage(res.text, 'bot'));
        } catch (error) {
            console.error("Error communicating with the bot", error);
            addMessage("Sorry, I'm having trouble connecting.", 'bot');
        }

        setInput(''); // Clear the input field after sending
    };

    return (
        <div className="chatbot">
            <div className="chatbot-messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chatbot-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBot;


return (
    <div className="chatbot">
        <div className="chatbot-memories">
            <h4>Memory</h4>
            {memories.map((memory, index) => (
                <div key={index} className="memory-item">
                    <span>{memory}</span>
                </div>
            ))}
        </div>
        <div className="chatbot-messages">
            {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                    <p>{msg.text}</p>
                    {msg.imageUrl && <img src={msg.imageUrl} alt="Place" />}
                </div>
            ))}
        </div>
        <form onSubmit={handleSubmit} className="chatbot-input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button type="submit">Send</button>
        </form>
    </div>
);
