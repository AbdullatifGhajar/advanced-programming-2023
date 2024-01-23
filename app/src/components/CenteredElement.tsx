import { Box } from '@mui/material';
import { HTMLAttributes } from 'react';

interface PageBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CenteredElement = ({ children }: PageBodyProps) => {
  return (
    <Box display="flex" justifyContent="center">
      {children}
    </Box>
  );
};

export default CenteredElement;
