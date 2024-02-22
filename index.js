const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const router=require('./router.js');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint for translating English to French
app.post('/translate', async (req, res) => {
    const text = req.body.text;

    if (!text) {
        return res.status(400).json({ error: 'Missing text to translate' });
    }

    try {
        const response = await axios.post('https://google-translate1.p.rapidapi.com/language/translate/v2', {
            q: text,
            source: 'en',
            target: 'fr'
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '2a82e9d80cmsh493478ff66ba0d0p1afe20jsn9c3fc6bc59ee',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
        });

        const translation = response.data.data.translations[0].translatedText;
        res.json({ translation });
    } catch (error) {
        console.error('Translation error:', error.message);
        res.status(500).json({ error: 'Translation failed' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
