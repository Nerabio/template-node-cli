import { greet } from "./utils/greet";
import dotenv from "dotenv";

// Загружаем переменные окружения
dotenv.config();

const name = process.env.USER_NAME || "World";
console.log(greet(name));
