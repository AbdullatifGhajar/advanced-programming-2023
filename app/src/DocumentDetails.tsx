import React from 'react';
import { useParams } from 'react-router-dom';

const DocumentDetails = () => {
    const [name, setName] = React.useState<string>("");
    const [fields, setFields] = React.useState<string[]>([]);
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
                    setFields(["field 1", "field 2"]);
                });
        }
    }, [id]);

    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {fields.map((field) => (
                    <li key={field}>
                        <input type="text" placeholder={field} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DocumentDetails;
