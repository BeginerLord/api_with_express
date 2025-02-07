import { StatusType } from "./constants";

export interface Base {
  uuid: string;
  status: StatusType;
  createdAt: Date;
  updatedAt: Date;
}