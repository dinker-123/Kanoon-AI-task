import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Container, Box, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { lightTheme, darkTheme } from './theme';
import DocumentSearch from './components/DocumentSearch';
import DocumentList from './components/DocumentList';
import DocumentForm from './components/DocumentForm';
import Image from './components/Image/inverted_coat_of_arms_black_bg-removebg-preview.png';
import { fetchDocuments } from './api/documents';

function App() {
  const [documents, setDocuments] = useState([]);
  const [themeMode, setThemeMode] = useState('dark');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchAndSetDocuments = async () => {
    try {
      const response = await fetchDocuments();
      setDocuments(response);
    } catch (error) {
      console.error('Failed to fetch documents', error);
    }
  };

  useEffect(() => {
    fetchAndSetDocuments();
  }, [documents]); 

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />

      <Typography
        variant="h1"
        sx={{
          color: 'white',
          marginBottom: '15px',
          padding: '5px',
          textAlign: 'center',
          fontSize: '4em',
          fontWeight: 'bold',
          fontFamily: 'Baskervville SC',
          paddingLeft: '30px',
          position: 'sticky',
          boxShadowBottom: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          background: 'rgb(30,30,30)',
        }}
      >
        <img
          src={Image}
          alt="Logo"
          style={{ width: '100px', height: '150px', marginRight: '30px', paddingTop: '10px' }}
        />
        Legal Document Management
      </Typography>

      <IconButton
        sx={{ position: 'absolute', top: 20, right: 20, color: 'white' }}
        onClick={toggleTheme}
        color="inherit"
      >
        {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <DocumentSearch onSearchChange={setSearchQuery} />
          <DocumentList documents={documents} searchQuery={searchQuery} />
          <DocumentForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
