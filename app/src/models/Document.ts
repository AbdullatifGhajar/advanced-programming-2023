import { AnyField } from './Field';

interface DocumentModel {
  id: string;
  name: string;
  fields: AnyField[];
  deadline: Date;
}

export default DocumentModel;
