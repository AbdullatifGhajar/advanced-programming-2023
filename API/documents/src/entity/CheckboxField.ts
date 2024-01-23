import { Column, ChildEntity } from 'typeorm';
import Field from './Field';

@ChildEntity()
class CheckboxField extends Field {
  @Column()
  value: boolean = false;
}

export default CheckboxField;
