const API_URL = 'http://localhost:3001/api';

export const fetchDocuments = async () => {
  // TODO: Implement API call to fetch documents
  try{
    const response = await fetch(`${API_URL}/documents`);
    if(!response.ok){
      throw new Error('Network error was not ok for fetchDocuments');
    }
    return response.json();
  }catch(error){
    console.error('Error fetching documents:', error);
    throw error;
  }
};

export const createDocument = async (document) => {
  // TODO: Implement API call to create a document
   try{
    const response = await fetch(`${API_URL}/documents`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(document)
    });
    if(!response.ok){
        throw new Error('Network error was not ok for creating document');
    }
    return response.json();
}catch(error){
  console.error('Error creating document',error);
  throw error;
}
};

export const searchDocuments = async (query) => {
  // Implement API call to search documents
  try {
    const response = await fetch(`${API_URL}/documents/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Network error was not ok for searchDocuments');
    }
    return response.json();
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
};


export const getDocument = async (id) => {
  // TODO: Implement API call to get a single document
};