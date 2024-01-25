import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import {
  AnyField,
  ITextField,
  ICheckboxField,
  IFileField,
  FieldType,
} from '../../models/Field';

import { Box, Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';

import TextFieldItem from './fields/TextFieldItem';
import CheckboxFieldItem from './fields/CheckboxFieldItem';
import FileFieldItem from './fields/FileFieldItem';
import IFieldError from './fields/FieldError';

import { api } from '../../services/AxiosService';
import MainLayout from '../../layouts/MainLayout';
import CenteredElement from '../../components/CenteredElement';
import React from 'react';
import DocumentService from '../../services/DocumentService';

const DocumentDetailsPage = () => {
  const navigate = useNavigate();

  const { id: documentId } = useParams<{ id: string }>();
  const [fields, setFields] = useState<AnyField[]>([]);
  const [fieldErrors, setFieldErrors] = useState<IFieldError>({});
  const hasError = Object.values(fieldErrors).some((value) => value.length > 0);

  // ensure that the documentId is defined
  useEffect(() => {
    if (!documentId) {
      navigate('/documents');
    }
  }, [documentId, navigate]);

  const documentService = new DocumentService();

  // Fetch form template from backend
  useEffect(() => {
    if (documentId == null) return;

    api.get(`/documents/${documentId}`)
      .then((response) => response.data)
      .then((data) => {
        const fetchedFields: ITextField[] = data.fields;
        setFields(fetchedFields);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [documentId]);

  // documentId is now defined for the rest of the component
  if (!documentId) return null;

  const getFieldItem = (field: AnyField) => {
    if (field.type === FieldType.Text) {
      return (
        <TextFieldItem
          textField={field as ITextField}
          setFields={setFields}
          setFieldErrors={setFieldErrors}
        />
      );
    } else if (field.type === FieldType.Checkbox) {
      return (
        <CheckboxFieldItem
          checkboxField={field as ICheckboxField}
          setFields={setFields}
        />
      );
    } else if (field.type === FieldType.File) {
      return (
        <FileFieldItem fileField={field as IFileField} setFields={setFields} />
      );
    }
    return null;
  };

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();

    if (hasError) {
      alert('Please fix all errors before saving');
      return;
    }

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
          {fields.map((field) => (
            <React.Fragment key={field.id}>
              {getFieldItem(field)}
              {fieldErrors[field.id] && (
                <div style={{ color: 'red' }}>{fieldErrors[field.id]}</div>
              )}
            </React.Fragment>
          ))}

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
