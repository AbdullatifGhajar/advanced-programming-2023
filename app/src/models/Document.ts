import { FieldModel } from './Field';

interface DocumentModel {
  id: string;
  name: string;
  fields: FieldModel[];
  deadline: Date;
}

export default DocumentModel;
