import { Snowflake, GuildMember, SnowflakeUtil } from "discord.js";
import { container } from "@sapphire/pieces";

export default class Member {
    async cacheID(member: Promise<GuildMember>) {
        const id = (await member).id
    }
}