const books = require('./books');

exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
        // Fetch a random book
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

        // Fetch all books
        if (event.path === '/.netlify/functions/books') {
            return {
                statusCode: 200,
                body: JSON.stringify({ books }),  
            };
        }

        // Handle unknown endpoint
        return {
            statusCode: 404,
            body: JSON.stringify({ message: "Endpoint not found" }),
        };
    }

    // Handle unsupported HTTP method
    return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method not allowed" }),
    };
};
