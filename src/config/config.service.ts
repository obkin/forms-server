import { Injectable } from '@nestjs/common';
import { IConfigService } from './config.service.interface';
import { DotenvConfigOutput, DotenvParseOutput, config } from 'dotenv';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class ConfigService implements IConfigService {
	private envConfig: DotenvParseOutput;
	constructor(private readonly loggerService: LoggerService) {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			this.loggerService.error(
				'[ConfigService]: configuration file (.env) not loaded or not found',
			);
		} else {
			setTimeout(() => {
				this.loggerService.log('[ConfigService]: configuration file (.env) loaded');
			}, 5000);
			this.envConfig = result.parsed as DotenvParseOutput;
		}
	}

	get(key: string): string {
		return this.envConfig[key];
	}
}
