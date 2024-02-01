import Document from './Document';
import User from './User';

interface UserApprovals {
  user: User;
  documents: Document[];
}

export default UserApprovals;
