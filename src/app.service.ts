import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
	bot_token: string;
	chat_id: string;
	constructor() {
		this.bot_token = '6025950417:AAGykNAOx0yAEnH-eRD5KTHWASpijZzuCoo'; // need configService !!!
		this.chat_id = '-934566585'; // need configService !!!
	}
	async sendDataToBot(): Promise<void> {
		try {
			await axios.post(
				`https://api.telegram.org/bot${this.bot_token}/sendMessage?chat_id=${this.chat_id}&text=Hello%20World`,
			);
			console.log('[AppService] - success');
		} catch (e) {
			console.log('[AppService] - fail');
		}
	}
}
