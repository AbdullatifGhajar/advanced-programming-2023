import Approval from './Approval';
import { AnyField } from './Field';

interface DocumentModel {
  id: string;
  name: string;
  fields: AnyField[];
  deadline: Date;
  approvals: Approval[];
}

export default DocumentModel;
