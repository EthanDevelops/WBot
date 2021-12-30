import { ApplyOptions } from '@sapphire/decorators'
import { Listener, ListenerOptions } from '@sapphire/framework'

@ApplyOptions<ListenerOptions>({
	event: 'consoleEvent',
})
export class ConsoleListener extends Listener {
	public async run(log: string) {
		console.log(log)
	}
}