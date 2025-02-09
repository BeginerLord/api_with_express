import { initMongoose, InitMongooseOptions } from "./connection";

export interface InitDataSourcesOptions {
  mongoose: InitMongooseOptions;
  // postgres?: InitPostgresOptions;
  //  redis?: InitRedisOptions;
}

export const initDataSources = async ({ mongoose }: InitDataSourcesOptions) => {
  if (mongoose) {
    await initMongoose(mongoose);
  }
  /*
    if (options.postgres) {
      await initPostgres(options.postgres);
    }
    if (options.redis) {
      await initRedis(options.redis);
    }

    */
};
