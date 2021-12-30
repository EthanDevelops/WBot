import { container } from '@sapphire/pieces'
import WBotChannel from './Channel'
import { BanOptions, Guild, Snowflake, UserResolvable } from 'discord.js'


export default class Guilds {
	findChannel(guild: Guild, query: string) {
		const channels = guild.channels.cache

		let channel
		channel = channels.get(query)

		if (!channel) {
			channel = channels.find((c) => c.name.toLowerCase() === query.toLowerCase())
		}

		return channel
	}
}