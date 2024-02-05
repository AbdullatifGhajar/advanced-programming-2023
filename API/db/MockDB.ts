import path from 'path';
import { DataSource } from 'typeorm';

import { Builder, Loader, Parser, Resolver } from 'typeorm-fixtures-cli/dist';

import MockDataSource from '../mock-data-source';

const fixturePath = path.join(__dirname, './fixtures');

export class MockDB {
  private static instance = MockDataSource;
  private static isInitialized = false;

  public static async getInstance(): Promise<DataSource> {
    if (!this.isInitialized) {
      await this.instance.initialize();
      await this.instance.synchronize(true);
      await this.loadFixtures(this.instance);
    }
    return this.instance;
  }

  private static async loadFixtures(dataSource: DataSource) {
    const loader = new Loader();
    loader.load(path.resolve(fixturePath));

    const fixtures = new Resolver().resolve(loader.fixtureConfigs);
    const builder = new Builder(dataSource, new Parser(), false);

    for (const fixture of fixtures) {
      const entity = await builder.build(fixture);
      try {
        await dataSource.getRepository(fixture.entity).save(entity);
      } catch (e) {
        console.error(e);
      }
    }
  }
}

export default MockDB;
