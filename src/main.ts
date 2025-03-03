type SlashCommand = {
  name: string;
  description: string;
};

type SlashCommandHandler = (interaction: any) => Promise<void> | void;

class DiscordClient {
  private token: string;
  private clientId: string;
  private slashCommands: SlashCommand[] = [];
  private slashCommandHandlers: { [key: string]: SlashCommandHandler } = {};
  constructor(token: string, clientId: string) {
    this.token = token;
    this.clientId = clientId;
  }

  public addSlashCommand(command: SlashCommand, handle: SlashCommandHandler) {
    this.slashCommands.push(command);
    this.slashCommandHandlers[command.name] = handle;
    return this;
  }

  public async applySlashCommands<T>(commands: SlashCommand[]): Promise<T> {
    const response = await fetch("https://discord.com/api/v10/applications/" + this.clientId + "/commands", {
      method: "POST",
      body: JSON.stringify(commands),
      headers: {
        "Authorization": "Bot " + this.token,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error('response error');
    }
    const data: T = await response.json();
    return data;
  }
}

// For module usage
export { DiscordClient }; 