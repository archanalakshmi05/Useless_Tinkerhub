// mapsHandler.js
import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

export const getPlaceInfo = async (placeName) => {
    try {
        const response = await client.findPlaceFromText({
            params: {
                input: placeName,
                inputtype: 'textquery',
                fields: ['place_id', 'name', 'photos'],
                key: 'YOUR_GOOGLE_MAPS_API_KEY'
            }
        });

        const place = response.data.candidates[0];
        const photoReference = place.photos ? place.photos[0].photo_reference : null;

        let imageUrl = null;
        if (photoReference) {
            imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=YOUR_GOOGLE_MAPS_API_KEY`;
        }

        return {
            placeId: place.place_id,
            name: place.name,
            imageUrl: imageUrl
        };
    } catch (error) {
        console.error("Error fetching place info", error);
        return null;
    }
};

import { getPlaceInfo } from './mapsHandler.js';

const handleLocationRequest = async (placeName) => {
    const placeInfo = await getPlaceInfo(placeName);

    if (placeInfo) {
        addMessage(`Here's information about ${placeInfo.name}`, 'bot');
        addMessage(placeInfo.imageUrl, 'bot'); // Display image

        // Save the place to memory
        await ChatMemory.updateOne(
            { userId: userID.current },
            { $push: { places: placeInfo } },
            { upsert: true }
        );
    } else {
        addMessage("I couldn't find information on that location.", 'bot');
    }
};

const saveToMemory = async (message, sender) => {
    await ChatMemory.updateOne(
        { userId: userID.current },
        { $push: { messages: { sender, text: message } } },
        { upsert: true }
    );
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addMessage(input, 'user');
    saveToMemory(input, 'user');

    if (input.toLowerCase().includes("find location")) {
        const placeName = input.split("find location ")[1];
        await handleLocationRequest(placeName);
    } else {
        // ... (existing bot handling logic)
    }
    setInput('');
};

