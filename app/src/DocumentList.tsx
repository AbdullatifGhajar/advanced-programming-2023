import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List, ListItem, Button } from '@mui/material';

import DocumentOverview from './DocumentOverview';

const mockDocumentList: DocumentOverview[] = [
    {
        id: "1",
        name: "Document 1",
    },
    {
        id: "2",
        name: "Document 2",
    },
]

const DocumentList = () => {
    const [documentOverviewList, setDocumentOverviewList] = React.useState<DocumentOverview[]>([]);
    const navigate = useNavigate(); // Using useNavigate hook

    React.useEffect(() => {
        fetch('http://localhost:8081/documents')
            .then((response) => response.json())
            .then((data) => {
                setDocumentOverviewList(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                setDocumentOverviewList(mockDocumentList);
            });
    }, []);

    const handleDocumentClick = (id: string) => {
        navigate(`/document/${id}`);
    };

    return (
        <Box display="flex" justifyContent="center">
            <Box display="flex" flexDirection="column" justifyContent="center" sx={{ width: '60%' }}>
                <h1>Document List</h1>
                <List>
                    {documentOverviewList.map((documentOverview) => (
                        <ListItem key={documentOverview.id}>
                            <Button 
                                onClick={() => handleDocumentClick(documentOverview.id)}
                                fullWidth
                                variant="contained"
                            >
                                {documentOverview.name}
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}

export default DocumentList;
