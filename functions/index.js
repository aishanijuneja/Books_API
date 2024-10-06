const books = require('../books');  // Adjust the path to your books.js file

exports.handler = async (event, context) => {
    // Only allow GET requests
    if (event.httpMethod === 'GET') {
        // Handle individual book request (random book)
        if (event.path === '/.netlify/functions/book') {
            const randomBook = books[Math.floor(Math.random() * books.length)];
            return {
                statusCode: 200,
                body: JSON.stringify({ 
                    title: randomBook.title,
                    author: randomBook.author,
                    description: randomBook.description 
                }),
            };
        }

        // Handle request for all books
        if (event.path === '/.netlify/functions/books') {
            return {
                statusCode: 200,
                body: JSON.stringify({ books }),  // Return the full array of books
            };
        }

        // Handle unknown endpoints
        return {
            statusCode: 404,
            body: JSON.stringify({ message: "Endpoint not found" }),
        };
    }

    // Handle non-GET methods
    return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method not allowed" }),
    };
};
