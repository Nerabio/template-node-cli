import { input, select, Separator } from "@inquirer/prompts";
import { injectable } from "inversify";

@injectable()
export class MenuService {
  async getMenu(): Promise<string> {
    return await select({
      message: "Select a package manager",
      choices: [
        {
          name: "npm",
          value: "npm",
          description: "npm is the most popular package manager",
        },
        {
          name: "yarn",
          value: "yarn",
          description: "yarn is an awesome package manager",
        },
        new Separator(),
        {
          name: "jspm",
          value: "jspm",
          disabled: true,
        },
        {
          name: "pnpm",
          value: "pnpm",
          disabled: "(pnpm is not available)",
        },
      ],
    });
  }

  async askName(): Promise<string> {
    return await input({ message: "Enter your name" });
  }
}
