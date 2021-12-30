import { ApplyOptions } from '@sapphire/decorators'
import { CommandErrorPayload, Listener, ListenerOptions } from '@sapphire/framework'

@ApplyOptions<ListenerOptions>({
	event: 'commandError',
})
export class CommandErrorListener extends Listener {
	public async run(error: Error, payload: CommandErrorPayload) {
			await payload.message.reply({
				embeds: [
					await this.container.utils.error(error, {
						type: 'command',
						data: {
							messageOptions: {
								guildID: payload.message.guildId as string,
								channelID: payload.message.channel.id,
								messageID: payload.message.id,
							},
						},
					}),
				],
			})
	}
}