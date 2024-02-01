import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      color="primary"
      onClick={() => navigate('..')} // TODO: refactor
      startIcon={<ArrowBack />}
    />
  );
};

export default BackButton;
