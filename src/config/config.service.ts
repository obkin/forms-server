import { Injectable } from '@nestjs/common';
import { IConfigService } from './config.service.interface';
import { DotenvConfigOutput, DotenvParseOutput, config } from 'dotenv';

@Injectable()
export class ConfigService implements IConfigService {
	private envConfig: DotenvParseOutput;
	constructor() {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			console.log('[ConfigService] fail: configuration file (.env) not loaded or not found');
		} else {
			setTimeout(() => {
				console.log('[ConfigService] success: configuration file (.env) loaded');
			}, 5000);
			this.envConfig = result.parsed as DotenvParseOutput;
		}
	}

	get(key: string): string {
		return this.envConfig[key];
	}
}
