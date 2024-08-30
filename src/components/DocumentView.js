import React from 'react';
import { Typography, Box, Dialog, DialogContent, DialogTitle } from '@mui/material';

function DocumentView({ document, openPopup, setOpenPopup }) {
  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <Dialog open={openPopup} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle variant="h3" sx={{ fontWeight: 'bold' }}>{document?.title}</DialogTitle>
      <DialogContent>
        <Typography variant="inherit" sx={{ fontSize: '22px' }} paragraph>
          {document?.content}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Type: {document?.documentType}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created: {document?.createdAt && new Date(document.createdAt).toLocaleString()}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default DocumentView;
