import { DataSource } from 'typeorm';
import AppDataSource from '../data-source';

class DB {
  private static instance: DataSource | null = null;

  private constructor() {}

  public static async getInstance(): Promise<DataSource> {
    if (!this.instance) {
      this.instance = AppDataSource;
      await this.instance.initialize();
    }
    return this.instance;
  }
}

export default DB;
