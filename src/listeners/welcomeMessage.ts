import { ApplyOptions } from '@sapphire/decorators'
import { Listener, ListenerOptions } from '@sapphire/framework'
import { GuildMember } from 'discord.js'

@ApplyOptions<ListenerOptions>({
	event: 'guildMemberAdd',
	name: 'welcome',
})
export class WelcomeListener extends Listener {
	async run(member: GuildMember) {
		const channelID = place.settings.welcomeID

		const welcomeChannel = await member.guild.channels.fetch(channelID)
		if (!welcomeChannel) return
		if (welcomeChannel.type != 'GUILD_TEXT') return

		const welcomeMessage = place.settings.welcomeMessage
		if (!welcomeMessage) return

		await welcomeChannel.send(this.formatString(welcomeMessage, member))
	}

	private formatString(string: string, member: GuildMember) {
		string = string.replaceAll('{user}', member.user.tag)
        string = string.replaceAll('{user.mention}', member.toString())
        string = string.replaceAll('{user.name}', member.user.username)
        string = string.replaceAll('{user.tag}', member.user.discriminator)
        string = string.replaceAll('{user.id}', member.user.id)

		string = string.replaceAll('{guild}', member.guild.name)
		string = string.replaceAll('{guild.size}', member.guild.memberCount.toString())

		return string
	}
}