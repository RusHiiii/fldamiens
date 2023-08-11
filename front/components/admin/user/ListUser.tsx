import {
  List,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  EmailField,
  Datagrid
} from 'react-admin';
import RoleField from "../common/RoleField";

export default function ListUser() {
  return (
    <List
      exporter={false}
      emptyWhileLoading
      hasCreate={true}
      hasEdit={true}
      title="Lister les utilisateurs"
    >
      <Datagrid>
        <TextField source="firstname" label="Prénom"/>
        <TextField source="lastname" label="Nom"/>
        <EmailField source="email" label="Email"/>
        <RoleField source="roles" label="Rôles" />
        <DateField source="createdAt" label="Date de création" />
        <DateField source="updatedAt" label="Date de mise à jour" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
