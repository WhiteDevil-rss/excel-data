import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function App() {
  const [data, setData] = useState([]);
  const [uploadError, setUploadError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

      // Validate and set the data
      if (validateData(worksheet)) {
        setData(worksheet);
        setUploadError(null);
      } else {
        setUploadError("Invalid data format.");
      }
    };

    reader.onerror = () => {
      setUploadError("Failed to read file.");
    };

    reader.readAsBinaryString(file);
  };

  const validateData = (data) => {
    // Add your validation logic here
    return true; // Assume validation passes for this example
  };

  const handleSubmit = () => {
    // Submit the data to the backend
    fetch('http://localhost:3001/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .then((result) => {
        alert('Data uploaded successfully!');
      })
      .catch((error) => {
        alert('Error uploading data');
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type="file" accept=".xls,.xlsx" onChange={handleFileUpload} />
      {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
      <table>
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Book Name</th>
            <th>ISBN Code</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length > 0 && <button onClick={handleSubmit}>Confirm Upload</button>}
    </div>
  );
}

export default App;
