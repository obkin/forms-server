import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { DatabaseService } from './database/database.service';
import { LoggerService } from './logger/logger.service';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService, ConfigService, DatabaseService, LoggerService],
})
export class AppModule {}
