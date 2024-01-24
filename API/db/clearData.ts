import DB from './DB';

async function clearData() {
  const db = await DB.getInstance();

  await db.createQueryBuilder().delete().from('field').execute();
  // await db.createQueryBuilder().delete().from("file").execute();
  await db.createQueryBuilder().delete().from('document').execute();
  await db.createQueryBuilder().delete().from('user').execute();

  // const tableNames = await db.entityMetadatas.map((entity) => entity.tableName);
  // // Clear each table
  // for (const tableName of tableNames) {
  //   await db.createQueryBuilder().delete().from(tableName).execute();
  //   console.log(`${tableName} cleared successfully`);
  // }

  await db.destroy();
}

clearData();
