import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Alert } from '@mui/material';
import { createDocument } from '../api/documents';

function DocumentForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    documentType: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title || !formData.content || !formData.documentType) {
      setError('All fields are required!');
      return;
    }

    try {
      const createdDocument = await createDocument(formData);
      console.log('Document created successfully:', createdDocument);
      setFormData({
        title: '',
        content: '',
        documentType: '',
      });
      setError('');
    } catch (error) {
      console.error('Error creating document:', error);
      setError('Failed to create the document. Please try again.');
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }} onSubmit={handleSubmit}>
      <Typography variant="h6" component="h2" gutterBottom>
        Add New Document
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        name="content"
        value={formData.content}
        onChange={handleChange}
        required
      />
      <TextField
        label="Document Type"
        variant="outlined"
        fullWidth
        margin="normal"
        name="documentType"
        value={formData.documentType}
        onChange={handleChange}
        required
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }} type="submit">
        Add Document
      </Button>
    </Box>
  );
}

export default DocumentForm;
