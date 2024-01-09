import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List } from '@mui/material';

import DocumentOverview from './DocumentOverview';
import DocumentListItem from './DocumentListItem';

const DocumentList = () => {
    const [documentOverviewList, setDocumentOverviewList] = React.useState<DocumentOverview[]>([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch('http://localhost:8081/documents')
            .then((response) => response.json())
            .then((data) => {
                setDocumentOverviewList(data);
            })
            .catch((error) => {
                console.error('Error:', error);
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
                        <DocumentListItem
                            key={documentOverview.id}
                            documentOverview={documentOverview}
                            onClick={handleDocumentClick}
                        />
                    ))}
                </List>
            </Box>
        </Box>
    )
}

export default DocumentList;
