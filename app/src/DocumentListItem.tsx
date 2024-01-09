import React from 'react';
import { ListItem, Button } from '@mui/material';

import DocumentOverview from './DocumentOverview';

interface DocumentListItemProps {
    documentOverview: DocumentOverview;
    onClick: (id: string) => void;
}

const DocumentListItem: React.FC<DocumentListItemProps> = ({ documentOverview, onClick }) => {
    return (
        <ListItem key={documentOverview.id}>
            <Button
                onClick={() => onClick(documentOverview.id)}
                fullWidth
                variant="contained"
            >
                {documentOverview.name}
            </Button>
        </ListItem>
    );
}

export default DocumentListItem;