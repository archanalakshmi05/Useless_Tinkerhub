// database.js
import mongoose from 'mongoose';

mongoose.set('strictQuery', false); // Add this line to suppress the warning

mongoose.connect('mongodb://localhost:27017/chatbot');

const ChatMemorySchema = new mongoose.Schema({
    userId: String,
    messages: [
        {
            sender: String,
            text: String,
            timestamp: { type: Date, default: Date.now }
        }
    ],
    places: [
        {
            placeId: String,
            name: String,
            imageUrl: String
        }
    ]
});

export const ChatMemory = mongoose.model('ChatMemory', ChatMemorySchema);
export default mongoose;
