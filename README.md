# Book and Author Data Import Functionality

This project implements a feature that allows users to upload an Excel file containing book and author data. After uploading, the data is displayed in a table for review, and upon confirmation, it is stored in a MongoDB database.

## Features

- **Excel File Upload**: Upload `.xls` or `.xlsx` files.
- **Data Validation**: Validate data format and required fields.
- **Data Preview**: Display the uploaded data in a table before saving.
- **Database Integration**: Save validated data to MongoDB.
- **Error Handling**: Provide feedback on errors during upload, validation, and storage.

## Technology Stack

- **Frontend**: ReactJS
- **Backend**: NodeJS with Express
- **Database**: MongoDB
- **Excel Parsing**: `xlsx` library for parsing Excel files

# Project documentation

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB (local or MongoDB Atlas)
- npm

### Frontend Setup

1. Navigate to the `book-author-upload` directory:
   ```bash
   cd book-author-upload
2. Install dependencies:
   ```bash
   npm install
3. Start the React development server:
   ```bash
   npm start

### Backend Setup
1. Navigate to the `book-author-upload` directory:
   ```bash
   cd book-author-upload
1. Navigate to the `book-author-upload` directory:
   ```bash
   cd book-author-upload
3. Set up your MongoDB connection:
   ```bash
   cd book-author-upload
4. Start the Express server:
   ```bash
   npm start
### Running the Application
1. Start both the frontend and backend servers as described above.
2. Open your browser and navigate to http://localhost:3000.
3. Use the file upload form to upload an Excel file.
4. Review the data in the displayed table.
5. Confirm the upload to save the data in MongoDB.

### Sample Data
A sample Excel file (sample_authors_books.xlsx) is included in the project directory. This file contains sample data for testing purposes.

### Deployment
To deploy the application, you can use:
- **Frontend**: Netlify, Vercel, or any static site hosting service.
- **Backend**: Vercel (with a MongoDB Atlas database), Heroku, or any Node.js hosting service.
### Notes
- Ensure MongoDB is running locally or provide a remote MongoDB connection string.
- Customize data validation logic in App.js as needed.
- You can extend the project by adding user authentication, more robust validation, or additional features.
### License
This project is open-source and available under the MIT License.
