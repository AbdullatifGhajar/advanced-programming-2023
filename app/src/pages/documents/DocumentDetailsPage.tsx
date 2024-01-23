import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import PageTitle from '../../components/PageTitle';
import { Field, TextField, CheckboxField, FileField } from '../../models/Field';

import TextFieldItem from './fields/TextFieldItem';
import CheckboxFieldItem from './fields/CheckboxFieldItem';
import FileFieldItem from './fields/FileFieldItem';

import MainLayout from '../../layouts/MainLayout';
import CenteredElement from '../../components/CenteredElement';

const DocumentDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [fields, setFields] = useState<Field[]>([]);

  const navigate = useNavigate();

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
        {fields.map((field) => {
          if (field.type === 'text') {
            return <TextFieldItem textField={field as TextField} />;
          } else if (field.type === 'checkbox') {
            return <CheckboxFieldItem checkboxField={field as CheckboxField} />;
          } else if (field.type === 'file') {
            return <FileFieldItem fileField={field as FileField} />;
          }
          return null;
        })}

        <CenteredElement>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate('/documents')}
            sx={{
              marginTop: '3em',
              width: '60%',
            }}
          >
            Save
          </Button>
        </CenteredElement>
      </Box>
    </MainLayout>
  );
};

export default DocumentDetailsPage;
