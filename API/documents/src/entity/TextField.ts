import { ChildEntity, Column } from 'typeorm';
import Field from './Field';

@ChildEntity()
class TextField extends Field {
  @Column({ default: '' })
  value!: string;

  get type(): string {
    return 'text';
  }
}

export default TextField;
