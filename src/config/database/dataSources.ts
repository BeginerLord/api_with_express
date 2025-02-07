import { initMongoose, InitMongooseOptions } from "./connection";

export interface InitDataSourcesOptions {
    mongoose: InitMongooseOptions;
  }
  
  export const initDataSources = async ({ mongoose }: InitDataSourcesOptions) => {
    if (mongoose) {
      await initMongoose(mongoose);
    }
  };