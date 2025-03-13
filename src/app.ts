import { injectable, inject } from "inversify";
import { ConfigApp } from "./interfaces/config-app.interface";
import { ConfigService } from "./services/config.service";
import { MenuService } from "./services/menu.service";

@injectable()
export class App {
  private config: ConfigApp;

  constructor(
    @inject(ConfigService) public readonly configService: ConfigService,
    @inject(MenuService) public readonly menuService: MenuService
  ) {
    this.config = configService.getInstance();
  }

  public async run(): Promise<void> {
    console.log(`Hello, ${this.config.userName}!`);
    const selector = await this.menuService.getMenu();
    const answer = await this.menuService.askName();
  }
}
