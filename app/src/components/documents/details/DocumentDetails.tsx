import React, { useState } from 'react';

import { AnyField, FieldType } from '../../../models/Field';

import TextFieldItem from '../fields/TextFieldItem';

import { Button } from '@mui/material';

import FieldError from '../../../models/FieldError';
import CenteredElement from '../../CenteredElement';

import Document from '../../../models/Document';
import CheckboxFieldItem from '../fields/CheckboxFieldItem';
import FileFieldItem from '../fields/FileFieldItem';

interface DocumentDetailsProps {
  document: Document;
  setDocument: React.Dispatch<React.SetStateAction<Document | null>>;
  handleSubmit?: (event: React.FormEvent) => void;
}

const DocumentDetails: React.FC<DocumentDetailsProps> = ({
  document,
  setDocument,
  handleSubmit,
}) => {
  const [fieldErrors, setFieldErrors] = useState<FieldError>({});
  const hasError = Object.values(fieldErrors).some((value) => value.length > 0);

  const isReadOnly = handleSubmit === undefined; // if handleSubmit is undefined, the form is read-only

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
          field={field}
          setField={setField}
          setFieldErrors={setFieldErrors}
          disabled={isReadOnly}
        />
      );
    } else if (field.type === FieldType.Checkbox) {
      return (
        <CheckboxFieldItem
          field={field}
          setField={setField}
          disabled={isReadOnly}
        />
      );
    } else if (field.type === FieldType.File) {
      return (
        <FileFieldItem
          field={field}
          setField={setField}
          disabled={isReadOnly}
        />
      );
    }
    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      {document.fields.map((field, index) => (
        <React.Fragment key={field.id}>
          {getFieldItem(field, index)}
          {fieldErrors[field.id] && (
            <div style={{ color: 'red' }}>{fieldErrors[field.id]}</div>
          )}
        </React.Fragment>
      ))}
      {!isReadOnly && (
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
      )}
    </form>
  );
};

export default DocumentDetails;
