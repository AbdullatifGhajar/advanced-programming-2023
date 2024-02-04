import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const ManageInternships = () => {
  // Placeholder data - this would be fetched from your backend in a real app
  const internships = [
    {
      id: 1,
      name: 'Paul',
      subject: 'Stage ouvrier',
      promotion: '2024',
      class: 'M2',
      startDate: '01/03/2024',
      endDate: '06/09/2024',
    },
    {
      id: 2,
      name: 'Marc',
      subject: 'Stage dev web',
      promotion: '2025',
      class: 'M1',
      startDate: '03/05/2024',
      endDate: '07/11/2024',
    },
    // ... more internships
  ];

  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ textAlign: 'center' }}
      >
        Admin Space
      </Typography>
      <Paper sx={{ margin: 'auto', overflow: 'hidden' }}>
        <Typography variant="h6" component="div" sx={{ margin: 2 }}>
          Manage an internship
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="internship table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Promotion</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Start date</TableCell>
                <TableCell>End date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {internships.map((internship) => (
                <TableRow key={internship.id}>
                  <TableCell>{internship.name}</TableCell>
                  <TableCell>{internship.subject}</TableCell>
                  <TableCell>{internship.promotion}</TableCell>
                  <TableCell>{internship.class}</TableCell>
                  <TableCell>{internship.startDate}</TableCell>
                  <TableCell>{internship.endDate}</TableCell>
                  <TableCell>
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="confirm">
                      <CheckIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ManageInternships;
