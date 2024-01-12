import { Box } from '@mui/material';

import PageTitle from '../components/PageTitle';


const HomePage = () => {
    return (
        <Box display="flex" flexDirection="column">
            <PageTitle title='Welcome to the home page' />
            this is the home page
        </Box>
    )
}

export default HomePage;
