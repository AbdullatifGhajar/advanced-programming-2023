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

export interface ITextField extends FieldModel {
  type: FieldType.Text;
  value: string;
}

export interface ICheckboxField extends FieldModel {
  type: FieldType.Checkbox;
  value: boolean;
}

export interface IFile {
  id: string;
  name: string;
}

export interface IFileField extends FieldModel {
  type: FieldType.File;
  file: IFile | null;
}

export type AnyField = ITextField | ICheckboxField | IFileField;
