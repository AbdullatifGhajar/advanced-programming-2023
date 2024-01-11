import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List } from '@mui/material';

import DocumentOverview from './DocumentOverview';
import DocumentListItem from './DocumentListItem';
import PageTitle from './components/PageTitle';

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
        navigate(`/documents/${id}`);
    };

    return (
        <Box display="flex" flexDirection="column" justifyContent="center">
            <PageTitle title="Documents" />
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
    )
}

export default DocumentList;
