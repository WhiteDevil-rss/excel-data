require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const AuthorSchema = new mongoose.Schema({
  name: String,
  email: String,
  dateOfBirth: Date,
});

const BookSchema = new mongoose.Schema({
  name: String,
  isbn: String,
  authorId: mongoose.Schema.Types.ObjectId,
});

const Author = mongoose.model('Author', AuthorSchema);
const Book = mongoose.model('Book', BookSchema);

app.post('/api/upload', async (req, res) => {
  const { data } = req.body;

  try {
    for (let i = 1; i < data.length; i++) {
      const [authorName, email, dob, bookName, isbn] = data[i];

      let author = await Author.findOne({ email });
      if (!author) {
        author = new Author({
          name: authorName,
          email,
          dateOfBirth: new Date(dob),
        });
        await author.save();
      }

      const book = new Book({
        name: bookName,
        isbn,
        authorId: author._id,
      });
      await book.save();
    }
    res.status(200).json({ message: 'Data uploaded successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
