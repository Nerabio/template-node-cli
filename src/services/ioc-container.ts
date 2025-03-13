import { Container, ServiceIdentifier } from "inversify";
import { App } from "../app";
import { ConfigService } from "./config.service";
import { MenuService } from "./menu.service";

export class IocContainer {
  private readonly container = new Container();

  constructor() {
    this.container.bind<ConfigService>(ConfigService).toSelf();

    this.container.bind<MenuService>(MenuService).toSelf();
    this.container.bind<App>(App).toSelf();
  }

  getInstance(): Container {
    return this.container;
  }

  get<T>(serviceIdentifier: ServiceIdentifier<T>): T {
    return this.container.get<T>(serviceIdentifier);
  }
}
