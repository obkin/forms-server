import { IConfigService } from './config.service.interface';
import { DotenvConfigOutput, DotenvParseOutput, config } from 'dotenv';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService implements IConfigService {
	private envConfig: DotenvParseOutput;
	constructor() {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			console.log('ConfigService: configuration file (.env) not loaded or not found');
		} else {
			console.log('ConfigService: configuration file (.env) loaded');
			this.envConfig = result.parsed as DotenvParseOutput;
		}
	}

	get(key: string): string {
		return this.envConfig[key];
	}
}
