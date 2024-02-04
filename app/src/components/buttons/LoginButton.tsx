import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';

const LoginButton = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  };

  return (
    <IconButton onClick={login}>
      <LoginIcon fontSize="large" style={{ color: 'white' }} />
    </IconButton>
  );
};

export default LoginButton;
