import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AnyField,
  TextField,
  FieldType,
  CheckboxField,
  FileField,
} from '../../../models/Field';

import TextFieldItem from '../fields/TextFieldItem';

import { Button } from '@mui/material';

import CenteredElement from '../../../components/CenteredElement';
import React from 'react';
import FieldError from '../fields/FieldError';

import Document from '../../../models/Document';
import CheckboxFieldItem from '../fields/CheckboxFieldItem';
import FileFieldItem from '../fields/FileFieldItem';

interface DocumentDetailsProps {
  document: Document;
  setDocument: React.Dispatch<React.SetStateAction<Document | null>>;
  saveDocument: () => Promise<void>;
}

const DocumentDetails: React.FC<DocumentDetailsProps> = ({
  document,
  setDocument,
  saveDocument,
}) => {
  const navigate = useNavigate();

  const [fieldErrors, setFieldErrors] = useState<FieldError>({});
  const hasError = Object.values(fieldErrors).some((value) => value.length > 0);

  const getFieldItem = (field: AnyField, index: number) => {
    const setField: React.Dispatch<React.SetStateAction<AnyField>> = (
      newField,
    ) => {
      const newFields = [...document.fields];
      newFields[index] = newField as AnyField;
      setDocument({ ...document, fields: newFields });
    };

    if (field.type === FieldType.Text) {
      return (
        <TextFieldItem
          textField={field as TextField}
          setField={setField}
          setFieldErrors={setFieldErrors}
        />
      );
    } else if (field.type === FieldType.Checkbox) {
      return (
        <CheckboxFieldItem
          checkboxField={field as CheckboxField}
          setField={setField}
        />
      );
    } else if (field.type === FieldType.File) {
      return (
        <FileFieldItem fileField={field as FileField} setField={setField} />
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

    saveDocument()
      .then(() => {
        navigate('/student/documents');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSave}>
      {document.fields.map((field, index) => (
        <React.Fragment key={field.id}>
          {getFieldItem(field, index)}
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
  );
};

export default DocumentDetails;
