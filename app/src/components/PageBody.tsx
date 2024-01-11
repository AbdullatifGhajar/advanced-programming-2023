import { Box } from '@mui/material';
import { HTMLAttributes, ReactNode } from 'react';

interface PageBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const PageBody = ({ children }: PageBodyProps) => {
    return (
        <Box
            maxWidth="70%"
            margin="1em auto"
        >
            {children}
        </Box>
    );
};

export default PageBody;
