import { Box } from '@mui/material';
import { HTMLAttributes } from 'react';
import BackButton from './buttons/BackButton';

interface PageBodyProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  backButton?: boolean;
}

const PageTitle = ({ title, backButton = false }: PageBodyProps) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr repeat(5, 1fr) 1fr"
      alignItems="center"
    >
      {backButton && <BackButton />}
      <h2 style={{ gridColumn: '2 / span 5', justifySelf: 'center' }}>
        {title}
      </h2>
    </Box>
  );
};

export default PageTitle;
