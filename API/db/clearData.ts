import DB from './DB';

import { Document } from '../documents/src/entity/Document';
import { Field } from '../documents/src/entity/Field';


async function clearData() {
    const db = await DB.getInstance();
   
    await db.createQueryBuilder().delete().from(Document).execute();
    console.log('Documents cleared successfully');

    await db.createQueryBuilder().delete().from(Field).execute();
    console.log('Fields cleared successfully');

    await db.destroy();
}

clearData()