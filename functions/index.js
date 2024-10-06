const books = require('./books'); 

exports.handler = async (event, context) => {
    
    if (event.httpMethod === 'GET') {
        
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

       
        if (event.path === '/.netlify/functions/books') {
            return {
                statusCode: 200,
                body: JSON.stringify({ books }),  
            };
        }

        
        return {
            statusCode: 404,
            body: JSON.stringify({ message: "Endpoint not found" }),
        };
    }

    
    return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method not allowed" }),
    };
};
