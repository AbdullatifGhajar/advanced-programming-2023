import React from 'react';


interface DocumentFormProps {
    documentId: string;
    fields: string[];
}

const DocumentForm = ({documentId, fields}: DocumentFormProps) => {
    return (
        <div>
            <h1>{documentId}</h1>
            <ul>
                {fields.map((field) => (
                    <li key={field}>
                        <input type="text" placeholder={field} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DocumentForm;