import { Module } from '@nestjs/common';
import { DatabaseSQLModule } from './database.sql.module';

@Module({
  imports: [DatabaseSQLModule],
})
export class DatabaseModule {}
