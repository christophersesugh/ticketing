import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const asyncScrypt = promisify(scrypt);

export class Password {
  static async toHash(storedPassword: string) {
    const salt = randomBytes(8).toString("hex");
    const __buffer = (await asyncScrypt(storedPassword, salt, 64)) as Buffer;
    return `${__buffer.toString("hex")}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split(".");
    const __buffer = (await asyncScrypt(suppliedPassword, salt, 64)) as Buffer;
    return hashedPassword === __buffer.toString("hex");
  }
}
