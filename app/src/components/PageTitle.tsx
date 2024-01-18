import { Box } from '@mui/material';
import { HTMLAttributes } from 'react';

interface PageBodyProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const PageTitle = ({ title }: PageBodyProps) => {
  return (
    <Box display="flex" justifyContent="center">
      <h1>{title}</h1>
    </Box>
  );
};

export default PageTitle;
