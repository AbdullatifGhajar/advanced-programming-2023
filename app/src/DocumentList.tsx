import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h1>Document List</h1>
            <ul>
                {documentOverviewList.map((documentOverview) => (
                    <li key={documentOverview.id}>
                        <button onClick={() => handleDocumentClick(documentOverview.id)}>
                            {documentOverview.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DocumentList;
