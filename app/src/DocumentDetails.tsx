import React from 'react';
import { useParams } from 'react-router-dom';

const exampleFields = [
    "name",
    "age"
]

const DocumentDetails = () => {
    const [name, setName] = React.useState<string>("");
    const [fields, setFields] = React.useState<string[]>([]);
    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
        fetch(`http://localhost:8081/documents/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setName(data.name);
                setFields(data.fields);
            })
            .catch((error) => {
                console.error('Error:', error);

                setName("Mock document name");
                setFields(exampleFields);
            });

    }, [id]);

    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {fields.map((field) => (
                    <li key={field}>
                        {field}: <input type="text" value={""} onChange={() => { }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DocumentDetails;
