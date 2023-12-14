import React from 'react';
import { useParams } from 'react-router-dom';

const exampleFields = {
    "name": "Paul",
    "age": 25,
}

const DocumentDetails = () => {
    const [name, setName] = React.useState<string>("");
    const [fields, setFields] = React.useState<{ [key: string]: any }>({}); // Adjusting the type
    const { id } = useParams<{ id: string }>(); // Extracting id from URL

    React.useEffect(() => {
        if (id) {
            fetch(`http://localhost:8081/documents/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setName(data.name);
                    setFields(data.fields);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setName("Mock document name");
                    setFields(exampleFields);
                });
        }
    }, [id]);

    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {Object.entries(fields).map(([fieldKey, fieldValue]) => (
                    <li key={fieldKey}>
                        {fieldKey}: <input type="text" value={fieldValue} onChange={() => {}} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DocumentDetails;
