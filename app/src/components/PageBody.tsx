import { Box } from '@mui/material';
import { HTMLAttributes, ReactNode } from 'react';

interface PageBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const PageBody = ({ children }: PageBodyProps) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box width="70%">{children}</Box>
    </Box>
  );
};

export default PageBody;
