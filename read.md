# Translate API using Express.js

This is a simple Express.js application that provides an API endpoint for translating English text to French using the Google Translate API.

## Installation

1. Clone the repository to your local machine:
   `git clone https://github.com/spm999/Translate-API`
3. Install dependencies using `npm install`

## Usage

1. Start the server:

   `npm start`
2. Once the server is running, you can send a POST request to `/translate` with JSON data containing the text you want to translate.
3. Replace `"Hello, world!"` with the text you want to translate.
4. The server will respond with the translated text in French.

## Configuration

To use the Google Translate API, you need to obtain an API key from [RapidAPI](https://rapidapi.com/hub).

Once you have the API key, replace the placeholder `X-RapidAPI-Key` value in `index.js` with your actual API key.

## Dependencies

* [Express.js](https://expressjs.com/): Web framework for Node.js.
* [Axios](https://axios-http.com/): Promise-based HTTP client for making requests.
* [Body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing request bodies.
