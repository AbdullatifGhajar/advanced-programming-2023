import Field from "./Field";

interface Document {
    id: string;
    name: string;
    fields: Field[];
}

export default Document;