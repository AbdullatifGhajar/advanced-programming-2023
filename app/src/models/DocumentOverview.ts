import Approval from './Approval';
import User from './User';

interface DocumentOverview {
  approvals: Approval[];
  id: string;
  name: string;
  deadline: Date;
  user?: User;
}

export default DocumentOverview;
