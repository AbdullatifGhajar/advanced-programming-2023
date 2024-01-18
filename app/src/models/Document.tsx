import Field from './Field';

interface Document {
  id: string;
  name: string;
  fields: Field[];
  deadline: Date;
}

export default Document;
