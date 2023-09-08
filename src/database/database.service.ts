import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class DatabaseService {
	constructor(private readonly loggerService: LoggerService) {}
	async connect(): Promise<void> {
		try {
			// DB connect
			this.loggerService.log('[DataBaseService]: database connected');
		} catch (error) {
			this.loggerService.error('[DataBaseService]: database was not connected:', error.message);
		}
	}

	async disconnect(): Promise<void> {
		// DB disconnect
		this.loggerService.warn('[DataBaseService]: database disconnected');
	}
}
