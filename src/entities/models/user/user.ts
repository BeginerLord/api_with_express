import { Base, RolType } from "@/entities/common";

export interface User extends Base {
  uuid: string;
  name: string;
  email: string;
  password: string;
  rol?: RolType;
  } 