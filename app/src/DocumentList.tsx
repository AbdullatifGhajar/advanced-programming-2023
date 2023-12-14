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
    return (
        <div>
            <h1>Document List</h1>
            <ul>
                {Object.keys(dataFromApi).map((documentId) => (
                    <li key={documentId}>
                        <DocumentForm documentId={documentId} fields={dataFromApi[documentId].fields} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DocumentList;