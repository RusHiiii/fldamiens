import {hydraDataProvider} from "@api-platform/admin";
import {CreateResult, UpdateResult} from "react-admin";

export const API_SERVER_URL = '';
export const ENTRYPOINT = API_SERVER_URL + '/api';

const baseDataProvider = hydraDataProvider({
  entrypoint: ENTRYPOINT
});

const dataProvider = {
  ...baseDataProvider,
  update: (resource: any, params: any): Promise<UpdateResult> => {
    if (['educations', 'experiences', 'projects'].includes(resource)) {
      // Remove undefined field (for file) when update
      Object.keys(params.data).forEach(key => params.data[key] === undefined && delete params.data[key])

      params = {
        ...params,
        data: {
          ...params.data,
          '_method': 'PUT',
          extraInformation: {
            hasFileField: true
          }
        }
      };
    }

    return baseDataProvider.update(resource, params);
  },
  create: (resource: any, params: any): Promise<CreateResult> => {
    if (['educations', 'experiences', 'projects'].includes(resource)) {
      // Remove undefined field (for file) when create
      Object.keys(params.data).forEach(key => params.data[key] === undefined && delete params.data[key])

      params = {
        ...params,
        data: {
          ...params.data,
          '_method': 'POST',
          extraInformation: {
            hasFileField: true
          }
        }
      };
    }

    return baseDataProvider.create(resource, params);
  }
};

export default dataProvider;
