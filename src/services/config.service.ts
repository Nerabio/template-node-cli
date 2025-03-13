import { injectable } from "inversify";
import { ConfigApp } from "../interfaces/config-app.interface";
import { snakeToCamel } from "../utils/snake-to-camel";

@injectable()
export class ConfigService {
  private config: ConfigApp;

  constructor() {
    this.config = this.initConfig(process.env);
  }

  getInstance(): ConfigApp {
    return this.config;
  }

  getConfigValue<K extends keyof ConfigApp>(key: K): ConfigApp[K] {
    if (!(key in this.config)) {
      console.warn(`Config key "${String(key)}" not found`);
    }
    return this.config[key];
  }

  updateConfig(newConfig: Partial<ConfigApp>): void {
    this.config = { ...this.config, ...newConfig };
  }

  private initConfig(env: NodeJS.ProcessEnv): ConfigApp {
    const config: Partial<ConfigApp> = {};

    for (const key in env) {
      if (env.hasOwnProperty(key)) {
        const configKey = snakeToCamel(key) as keyof ConfigApp;
        config[configKey] = env[key] as any;
      }
    }
    return config;
  }
}
