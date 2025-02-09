/*import { Client } from "pg";

export interface InitPostgresOptions {
  connectionString: string;
}

export const initPostgres = async ({ connectionString }: InitPostgresOptions) => {
  const client = new Client({ connectionString });
  await client.connect();
  console.info(`PostgreSQL: Connected to ${connectionString}`);
  return client;
};
*/