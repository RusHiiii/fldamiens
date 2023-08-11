import {RaRecord} from "react-admin";

export interface Experience extends RaRecord {
  name: string,
  startedAt: string,
  endedAt: string,
  city: string,
  company: string,
  description: string,
  image: {
    contentUrl: string
  },
  createdAt: string,
  updatedAt: string
}
