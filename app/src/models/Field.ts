export interface FieldModel {
  id: string;
  name: string;
  type: string;
}

export enum FieldType {
  Text = 'text',
  Checkbox = 'checkbox',
  File = 'file',
}

export interface TextField extends FieldModel {
  type: FieldType.Text;
  value: string;
}

export interface CheckboxField extends FieldModel {
  type: FieldType.Checkbox;
  isChecked: boolean;
}

export interface File {
  id: string;
  name: string;
}

export interface FileField extends FieldModel {
  type: FieldType.File;
  file: File | null;
}

export type AnyField = TextField | CheckboxField | FileField;
