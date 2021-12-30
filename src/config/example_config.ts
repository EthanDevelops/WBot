import { Config } from '../lib/index'

export default new Config({
	tokens: {
		token: '[TOKEN]',
		betaToken: '[TOKEN]',
		devToken: '[TOKEN]',
		hypixelApiKey: '[API_KEY]',
		wolframAlphaAppId: '[APP_ID]',
		imgurClientId: '[CLIENT_ID]',
		imgurClientSecret: '[CLIENT_SECRET]',
		sentryDsn: 'SENTRY_DSN'
	},
	environment: 'development',
	owners: [
		'<your id here>' // your username here 
	],
	prefix: '.',
});