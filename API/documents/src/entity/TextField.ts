import { Column, ChildEntity } from 'typeorm';
import Field from './Field';

@ChildEntity()
class TextField extends Field {
  @Column({ default: '' })
  value!: string;
}

export default TextField;
