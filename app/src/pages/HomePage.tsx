import { Box } from '@mui/material';

import PageTitle from '../components/PageTitle';

import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <Box display="flex" flexDirection="column">
        <PageTitle title="Welcome to the home page" />
        this is the home page
      </Box>
    </MainLayout>
  );
};

export default HomePage;
