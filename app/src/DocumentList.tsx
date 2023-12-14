import React from 'react';

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

    React.useEffect(() => {
        fetch('localhost:8081/documents')
            .then((response) => response.json())
            .then((data) => {
                setDocumentOverviewList(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                setDocumentOverviewList(mockDocumentList);
            });
    }, []);

    return (
        <div>
            <h1>Document List</h1>
            <ul>
                {documentOverviewList.map((documentOverview) => (
                    <li key={documentOverview.id}>
                        <a href={`/documents/${documentOverview.id}`}>{documentOverview.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DocumentList;