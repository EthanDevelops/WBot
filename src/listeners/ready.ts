import { ApplyOptions } from '@sapphire/decorators'
import { Listener, ListenerOptions } from '@sapphire/framework'

@ApplyOptions<ListenerOptions>({
	once: true,
	event: 'ready',
})
export class ReadyListener extends Listener {
	async run() {
		this.container.logging.info(`Logged in as ${this.container.client.user?.tag}`, 'magenta')
	}
}