import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { DataSource } from 'typeorm';

@Injectable()
export class TypeormService {
	constructor(private readonly configService: ConfigService) {}
	PostgresDataSource = new DataSource({
		// better use configService below:
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'mac',
		password: '123456',
		database: 'mac',
		entities: [],
	});
}
