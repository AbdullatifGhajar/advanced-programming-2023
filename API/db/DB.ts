import { DataSource } from 'typeorm';
import AppDataSource from '../data-source';

class DB {
  private static instance = AppDataSource;
  private static isInitialized = false;

  public static async getInstance(): Promise<DataSource> {
    if (!this.isInitialized) {
      await this.instance.initialize();
    }
    return this.instance;
  }
}

export default DB;
