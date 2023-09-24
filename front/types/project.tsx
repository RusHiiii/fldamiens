import {RaRecord} from "react-admin";

export interface Project extends RaRecord {
  name: string,
  shortDescription: string,
  description: string,
  url: string,
  year: string,
  primaryImage: {
    contentUrl: string
  },
  secondaryImage: {
    contentUrl: string
  },
  createdAt: string,
  updatedAt: string
}
