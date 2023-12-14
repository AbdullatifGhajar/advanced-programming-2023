import React from 'react';
import DocumentForm from './DocumentForm';

const dataFromApi: { [key: string]: { fields: string[] } } = {
    document1: {
        fields: ["surname", "family name"]
    },
    document2: {
        fields: ["given name", "first name", "age"]
    },
}


const DocumentList = () => {
    const [documentData, setDocumentData] = React.useState<{ [key: string]: { fields: string[] } }>({});
    
    React.useEffect(() => {
        fetch('localhost:3000/api/documents')
        .then((response) => response.json())
        .then((data) => {
            setDocumentData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            setDocumentData(dataFromApi);
        });
    }, []);
    
    return (
        <div>
            <h1>Document List</h1>
            <ul>
                {Object.keys(documentData).map((documentId) => (
                    <li key={documentId}>
                        <DocumentForm documentId={documentId} fields={dataFromApi[documentId].fields} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DocumentList;