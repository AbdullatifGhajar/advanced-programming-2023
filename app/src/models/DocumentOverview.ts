import Approval from './Approval';

interface DocumentOverview {
  approvals: Approval[];
  id: string;
  name: string;
  deadline: Date;
}

export default DocumentOverview;
