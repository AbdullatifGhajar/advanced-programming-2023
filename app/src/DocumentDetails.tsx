import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const DocumentDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [initialValues, setInitialValues] = useState<{ [key: string]: string }>({});
    const [validationSchema, setValidationSchema] = useState({});

    const navigate = useNavigate();


    // Fetch form template from backend
    useEffect(() => {
        fetch(`http://localhost:8081/documents/${id}`)
            .then((response) => response.json())
            .then((data) => {
                const fetchedFields: string[] = data.fields;
                const fieldsSchema: { [key: string]: yup.Schema<any> } = {};
                const fieldsValues: { [key: string]: string } = {};

                // Build the initial values and validation schema
                fetchedFields.forEach((field: string) => {
                    if (field === "age") {
                        fieldsSchema[field] = yup.number();
                        fieldsValues[field] = "18";
                    } else {
                        fieldsSchema[field] = yup.string();
                        fieldsValues[field] = ""; // empty for now
                    }
                });
                setInitialValues(fieldsValues);
                setValidationSchema(yup.object().shape(fieldsSchema));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id]);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            // add submission logic here
        },
        enableReinitialize: true // reinitialize formik when initialValues change
    });

    return (
        <Box display="flex" justifyContent="center">
            <Box display="flex" flexDirection="column" justifyContent="center" sx={{ width: '60%' }}>
                <Box display="flex">
                    <Button
                        color="primary"
                        onClick={() => navigate('/')}
                        startIcon={<ArrowBack />}
                    />
                    <h1>Edit Document</h1>
                </Box>
                <form onSubmit={formik.handleSubmit} >
                    {Object.keys(initialValues).map(key => (
                        <TextField
                            key={key}
                            id={key}
                            name={key}
                            label={key.charAt(0).toUpperCase() + key.slice(1)}
                            value={formik.values[key]}
                            onChange={formik.handleChange}
                            error={formik.touched[key] && Boolean(formik.errors[key])}
                            helperText={formik.touched[key] && formik.errors[key]}
                            margin="normal"
                            fullWidth
                        />
                    ))}
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Save
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

export default DocumentDetails;
