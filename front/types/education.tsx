import {RaRecord} from "react-admin";

export interface Education extends RaRecord {
  name: string,
  startedAt: string,
  endedAt: string,
  city: string,
  studyType: string,
  description: string,
  image: {
    contentUrl: string
  },
  createdAt: string,
  updatedAt: string
}
