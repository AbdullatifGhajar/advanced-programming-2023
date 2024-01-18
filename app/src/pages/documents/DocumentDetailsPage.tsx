import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import PageTitle from '../../components/PageTitle';
import Field from '../../models/Field';

import MainLayout from '../../layouts/MainLayout';

const DocumentDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [fields, setFields] = useState<Field[]>([]);

  const navigate = useNavigate();

  const initialValues = (fields: Field[]) => {
    return fields.map((field: Field) => ({
      [field.name]: field.value,
    }));
  };

  const validationSchema = (fields: Field[]) => {
    return fields.map((field: Field) => ({
      // schema is for now optional, set all to string
      [field.name]: yup.string(),
    }));
  };

  // Fetch form template from backend
  useEffect(() => {
    fetch(`http://localhost:8081/documents/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const fetchedFields: Field[] = data.fields;
        setFields(fetchedFields);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const formik = useFormik({
    initialValues: initialValues(fields),
    validationSchema: validationSchema(fields),
    onSubmit: (values) => {
      console.log(values);
      // add submission logic here
    },
    enableReinitialize: true, // reinitialize formik when initialValues change
  });

  return (
    <MainLayout>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex" justifyContent="center">
          <Button
            color="primary"
            onClick={() => navigate('/documents')}
            startIcon={<ArrowBack />}
          />
          {/* TODO: use document name instead */}
          <PageTitle title={'Edit Document'} />
        </Box>
        <form onSubmit={formik.handleSubmit}>
          {fields.map((field) => (
            <TextField
              key={field.id}
              id={field.id}
              name={field.name}
              label={field.name}
              value={field.value}
              onChange={formik.handleChange}
              margin="normal"
              fullWidth
            />
          ))}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Save
          </Button>
        </form>
      </Box>
    </MainLayout>
  );
};

export default DocumentDetailsPage;
