import Approval from './Approval';
import { AnyField } from './Field';

interface Document {
  id: string;
  name: string;
  fields: AnyField[];
  deadline: Date;
  approvals: Approval[];
}

export default Document;
