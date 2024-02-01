import ArticleIcon from '@mui/icons-material/Article';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DocumentsButton = () => {
  const navigate = useNavigate();

  const goToDocuments = () => {
    navigate('/student/documents');
  };

  return (
    <IconButton onClick={goToDocuments}>
      <ArticleIcon fontSize="large" style={{ color: 'white' }} />
    </IconButton>
  );
};

export default DocumentsButton;
