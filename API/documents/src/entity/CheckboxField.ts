import { Column, ChildEntity } from 'typeorm';
import Field from './Field';

@ChildEntity()
class CheckboxField extends Field {
  @Column()
  value: boolean = false;

  get type(): string {
    return 'checkbox';
  }
}

export default CheckboxField;
