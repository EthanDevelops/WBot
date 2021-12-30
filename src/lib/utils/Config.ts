/* https://github.com/EthanDevelops/bush-bot/blob/master/src/lib/utils/Config.ts */
import { type Snowflake } from 'discord.js';

export class Config {
	public tokens: Tokens;
	public environment: Environment;
	public owners: Snowflake[];
	public prefix: string;

	public constructor(options: ConfigOptions) {
		this.tokens = options.tokens;
		this.environment = options.environment;
		this.owners = options.owners;
		this.prefix = options.prefix;
	}

	public get token(): string {
		return this.environment === 'production'
			? this.tokens.token
			: this.environment === 'beta'
			? this.tokens.betaToken
			: this.tokens.devToken;
	}

	public get isProduction(): boolean {
		return this.environment === 'production';
	}

	public get isBeta(): boolean {
		return this.environment === 'beta';
	}

	public get isDevelopment(): boolean {
		return this.environment === 'development';
	}
}

export interface ConfigOptions {
	tokens: Tokens;
	environment: Environment;
	owners: Snowflake[];
	prefix: string;
}

interface Tokens {
	token: string;
	betaToken: string;
	devToken: string;
	hypixelApiKey: string;
	wolframAlphaAppId: string;
	imgurClientId: string;
	imgurClientSecret: string;
	sentryDsn: string;
}

type Environment = 'production' | 'beta' | 'development';