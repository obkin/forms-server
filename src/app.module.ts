import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { LoggerService } from './logger/logger.service';
import { TypeormService } from './typeorm/typeorm.service';
import { ConfigService } from './config/config.service';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService, ConfigService, DatabaseService, LoggerService, TypeormService],
})
export class AppModule {
	constructor(private readonly databaseService: DatabaseService) {
		this.databaseService.connect();
	}
}
