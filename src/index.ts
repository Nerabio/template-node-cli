import { greet } from "./utils/greet";
import dotenv from "dotenv";
import { input, select, Separator } from "@inquirer/prompts";
import { IocContainer } from "./services/ioc-container";
import { App } from "./app";

dotenv.config();

async function bootstrap(): Promise<void> {
  const ioc = new IocContainer();

  const app = ioc.get<App>(App);
  await app.run();
}

(async () => await bootstrap())();
