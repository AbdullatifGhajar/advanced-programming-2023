import Approval from './Approval';
import User from './User';

interface DocumentOverview {
  id: string;
  name: string;
  deadline: Date;
  student?: User;
  approvals?: Approval[];
}

export default DocumentOverview;
