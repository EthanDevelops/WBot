import { DroneClient } from "./creators/DroneClient";
import config from './config/config'
import '@sapphire/plugin-editable-commands/register'

const client = new DroneClient()
void client.login(new config.default.tokens.token)


