import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import { AnyField, TextField, CheckboxField, FileField } from '../../models/Field';

import { Box, Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';

import TextFieldItem from './fields/TextFieldItem';
import CheckboxFieldItem from './fields/CheckboxFieldItem';
import FileFieldItem from './fields/FileFieldItem';
import DocumentService from '../../services/DocumentService';

import MainLayout from '../../layouts/MainLayout';
import CenteredElement from '../../components/CenteredElement';

const DocumentDetailsPage = () => {
  const navigate = useNavigate();

  const { id: documentId } = useParams<{ id: string }>();
  const [fields, setFields] = useState<AnyField[]>([]);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: boolean }>({});

  const documentService = new DocumentService();

  const hasError = Object.values(fieldErrors).some((error) => error);
  // const hasEmptyOrNullUndefinedValues = fields.some(
  //   (field) => field.value == null || field.value.trim() === '',
  // );

  // ensure that the documentId is defined
  useEffect(() => {
    if (!documentId) {
      navigate('/documents');
    }
  }, [documentId, navigate]);

  // Fetch form template from backend
  useEffect(() => {
    if (documentId == null) return;

    fetch(`http://localhost:8081/documents/${documentId}`)
      .then((response) => response.json())
      .then((data) => {
        const fetchedFields: TextField[] = data.fields;
        setFields(fetchedFields);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [documentId]);

  // documentId is now defined for the rest of the component
  if (!documentId) return null;

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();
    // // Check for null or undefined values
    // const hasEmptyOrNullUndefinedValues = fields.some(
    //   (field) => field.value == null || field.value.trim() === '',
    // );
    // if (hasEmptyOrNullUndefinedValues) {
    //   setFieldErrors((prevErrors) => {
    //     //add the errors in the array of errors
    //     const updatedErrors: { [key: string]: boolean } = {};
    //     fields.forEach((field) => {
    //       if (field.value == null || field.value.trim() === '') {
    //         updatedErrors[field.id] = true;
    //       }
    //     });
    //     return updatedErrors;
    //   });
    // }

    documentService
      .saveFields(documentId, fields)
      .then(() => {
        alert('Your document is saved');
        navigate('/documents');
      })
      .catch((error) => {
        console.error('Error saving or fetching document:', error);
      });
  };

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

        <form onSubmit={handleSave}>
          {fields.map((field) => {
            if (field.type === 'text') {
              return <TextFieldItem textField={field as TextField} setFields={setFields} />;
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
              fullWidth
              type="submit"
              disabled={hasError}
            >
              Save
            </Button>
          </CenteredElement>
        </form>
      </Box>
    </MainLayout>
  );
};

export default DocumentDetailsPage;
