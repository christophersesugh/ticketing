import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

class Password {
  static async toHash(storedPassword: string) {
    const asyncScrypt = promisify(scrypt);
    const salt = randomBytes(8).toString("hex");
    const __buffer = (await asyncScrypt(storedPassword, salt, 64)) as Buffer;
    return `${__buffer.toString("hex")}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {}
}
