import * as React from "react";
import {HydraAdmin} from '@api-platform/admin';
import {LoginForm, Login, Resource, Layout} from "react-admin";
import CreateEducation from "./education/CreateEducation";
import ListEducation from "./education/ListEducation";
import EditEducation from "./education/EditEducation";
import TopBar from "./common/TopBar";
import {Business, Computer, People, School} from "@mui/icons-material";
import authProvider from "../../providers/admin/authProvider";
import {theme} from "../../themes/admin/theme";
import dataProvider, {ENTRYPOINT} from "../../providers/admin/dataProvider";
import i18nProvider from "../../providers/admin/i18nProvider";
import CreateExperience from "./experience/CreateExperience";
import EditExperience from "./experience/EditExperience";
import ListExperience from "./experience/ListExperience";
import CreateProject from "./project/CreateProject";
import ListProject from "./project/ListProject";
import EditProject from "./project/EditProject";
import ListUser from "./user/ListUser";
import CreateUser from "./user/CreateUser";
import EditUser from "./user/EditUser";

const Admin = () => (
    <HydraAdmin
      requireAuth
      theme={theme}
      entrypoint={ENTRYPOINT}
      i18nProvider={i18nProvider}
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={() => (
        <Login>
          <LoginForm />
        </Login>
      )}
      layout={(props) => <Layout {...props} appBar={TopBar} />}
    >
      <Resource
        name={"educations"}
        create={CreateEducation}
        list={ListEducation}
        edit={EditEducation}
        icon={School}
      />
      <Resource
          name={"experiences"}
          create={CreateExperience}
          list={ListExperience}
          edit={EditExperience}
          icon={Business}
      />
      <Resource
          name={"projects"}
          create={CreateProject}
          list={ListProject}
          edit={EditProject}
          icon={Computer}
      />
      <Resource
          name={"users"}
          list={ListUser}
          create={CreateUser}
          edit={EditUser}
          icon={People}
      />
    </HydraAdmin>
);

export default Admin;
