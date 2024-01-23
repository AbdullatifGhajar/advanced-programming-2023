import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import PageTitle from '../../components/PageTitle';
import Field from '../../models/Field';
import DocumentService from '../../services/DocumentService';

import MainLayout from '../../layouts/MainLayout';


const DocumentDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [fields, setFields] = useState<Field[]>([]);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: boolean }>({});

  const documentService = new DocumentService();
  const navigate = useNavigate();

  const hasError = Object.values(fieldErrors).some((error) => error);
  const hasEmptyOrNullUndefinedValues = fields.some((field) => field.value == null || field.value.trim() === '');

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
    
  const handleFieldChange = (fieldId: string, newValue: string) => {
    setFields((prevFields) => {
      // Copy of previous fields
      const updatedFields = [...prevFields];
  
      // Find the right fields with the given id
      const index = updatedFields.findIndex((field) => field.id === fieldId);
  
      // fields is found so update it
      if (index !== -1) {
        updatedFields[index] = { ...updatedFields[index], value: newValue };
      }
      return updatedFields;
    });
  };


  
    const handleSave = async (event: React.FormEvent) => {
      event.preventDefault();
      // Check for null or undefined values
      const hasEmptyOrNullUndefinedValues = fields.some((field) => field.value == null || field.value.trim() === '');

      if (hasEmptyOrNullUndefinedValues) {
        setFieldErrors((prevErrors) => { //add the errors in the array of errors
          const updatedErrors: { [key: string]: boolean } = {};
          fields.forEach((field) => {
            if (field.value == null || field.value.trim() === '') {
              updatedErrors[field.id] = true;
            }
          });
          return updatedErrors;
        });
      }
  
      try {
        if (id) {
          // Map the 'fields' array to the format expected by the saveDocument method
          const updatedFields = fields.map((field) => ({
            id: field.id,
            name: field.name,
            value: field.value, 
          }));
  
          await documentService.saveDocument(id, updatedFields);
  
          // Retrieve the updated document after the save operation
          const updatedDocument = await documentService.getDocument(id);
          alert("Your document is saved")
          navigate('/documents');

          // Update the state with the fields of the updated document
          setFields(updatedDocument.fields);
        } else {
          console.error('ID is undefined.');
        }
      } catch (error) {
        console.error('Error saving or fetching document:', error);
      }
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
          <PageTitle title={`Edit Document:`} />
        </Box>
        <form onSubmit={handleSave}>
          {fields.map((field) => (
              <TextField
                key={field.id}
                id={field.id}
                name={field.name}
                label={field.name}
                defaultValue={field.value}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                margin="normal"
                fullWidth
              />
          ))}
          <Button color="primary" variant="contained" fullWidth type="submit" disabled={hasError || hasEmptyOrNullUndefinedValues}>
            Save
          </Button>
        </form>
      </Box>
    </MainLayout>
  );
};

export default DocumentDetailsPage;
