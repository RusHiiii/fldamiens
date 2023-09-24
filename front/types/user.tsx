import {RaRecord} from "react-admin";

export interface User extends RaRecord {
  firstname: string,
  lastname: string,
  email: string,
  roles: string[],
  createdAt: string,
  updatedAt: string
}
