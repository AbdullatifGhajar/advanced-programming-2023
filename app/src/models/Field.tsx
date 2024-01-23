export interface Field {
  id: string;
  name: string;
  type: string;
}

export interface TextField extends Field {
  type: 'text';
  value: string;
}

export interface CheckboxField extends Field {
  type: 'checkbox';
  value: boolean;
}

export interface File {
  id: string;
  name: string;
}

export interface FileField extends Field {
  type: 'file';
  file: File | null;
}
