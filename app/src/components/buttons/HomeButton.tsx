import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <IconButton onClick={goToHome}>
      <HomeIcon fontSize="large" style={{ color: 'white' }} />
    </IconButton>
  );
};

export default HomeButton;
