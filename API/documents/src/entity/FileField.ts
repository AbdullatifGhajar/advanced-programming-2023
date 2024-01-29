import { JoinColumn, ChildEntity, OneToOne } from 'typeorm';
import Field from './Field';

import File from '../../../files/src/entity/File';

@ChildEntity()
class FileField extends Field {
  @OneToOne(() => File)
  @JoinColumn()
  file!: File;

  get type(): string {
    return 'file';
  }
}

export default FileField;
