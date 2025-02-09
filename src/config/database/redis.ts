/*import { createClient } from "redis";

export interface InitRedisOptions {
  url: string;
}

export const initRedis = async ({ url }: InitRedisOptions) => {
  const client = createClient({ url });
  await client.connect();
  console.info(`Redis: Connected to ${url}`);
  return client;
};
*/