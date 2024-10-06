# Book Recommendations

Welcome to the **Book Recommendations** API! This API provides a collection of classic literature recommendations from renowned authors, featuring titles from Russian, German, and French literature.

## Features

- Retrieve random book recommendations.
- Easy to use and integrate into your projects.
- Lightweight and fast.

## Getting Started

### Installation

To use the Book Recommendations API, clone the repository and install the required dependencies:

```bash
git clone https://github.com/your-username/book-recommendations.git
cd book-recommendations
npm install
```

### Usage

You can access the API endpoints as follows:

1. **Get a Random Book**
   - **Endpoint**: `GET /api/book`
   - **Response**: A random book recommendation.

2. **Get All Books**
   - **Endpoint**: `GET /api/books`
   - **Response**: A list of all book recommendations.

### Example

```bash
curl -X GET http://localhost:3000/api/book
```

### Sample Response for a Random Book

```json
{
  "title": "Crime and Punishment",
  "author": "Fyodor Dostoyevsky"
}
```

### Sample Response for All Books

```json
{
  "books": [
    { "title": "Crime and Punishment", "author": "Fyodor Dostoyevsky" },
    { "title": "Anna Karenina", "author": "Leo Tolstoy" },
    { "title": "The Metamorphosis", "author": "Franz Kafka" },
    { "title": "Madame Bovary", "author": "Gustave Flaubert" },
    { "title": "Les Misérables", "author": "Victor Hugo" }
  ]
}
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions or improvements.

## Contact

For any inquiries or feedback, you can reach me at [cloudyr4in5@gmail.com].

Enjoy the book recommendations!