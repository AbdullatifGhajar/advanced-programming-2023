import yup from 'yup';

interface Field {
    id: string;
    name: string;
    value: string;
    schema?: string;
}

export default Field;