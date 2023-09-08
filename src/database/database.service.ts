import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
	async connect(): Promise<void> {
		try {
			// DB connect
			console.log('[DataBaseService]: database connected');
		} catch (error) {
			console.log('[DataBaseService]: database was not connected:', error.message);
		}
	}

	async disconnect(): Promise<void> {
		// DB disconnect
		console.log('[DataBaseService]: database disconnected');
	}
}
