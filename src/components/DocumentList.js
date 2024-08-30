import React, { useState } from 'react';
import { List, ListItem, ListItemText, Typography, Paper, Box } from '@mui/material';
import DocumentView from "../components/DocumentView";

function DocumentList({ documents, searchQuery }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleOpenPopup = (doc) => {
    setSelectedDocument(doc);
    setOpenPopup(true);
  };

  const filteredDocuments = documents.filter((doc) =>
    doc.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.documentType?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, mt: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
        Document List
      </Typography>

      <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, mt: 2 }}>
        {filteredDocuments.length > 0 ? (
          <List sx={{ maxHeight: '400px', overflow: 'auto' }}>
            {filteredDocuments.map((doc) => (
              <ListItem key={doc.id} sx={{ mb: 1 }} onClick={() => handleOpenPopup(doc)}>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.8rem' } }} style={{ cursor: 'pointer' }}>
                      {doc.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {`${doc.documentType} - ${new Date(doc.createdAt).toLocaleDateString()}`}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
            No documents found
          </Typography>
        )}
      </Paper>

      {selectedDocument && (
        <DocumentView
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          document={selectedDocument}
        />
      )}
    </Box>
  );
}

export default DocumentList;
