import {
  List,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  Datagrid
} from 'react-admin';

export default function ListExperience() {
  return (
    <List
      exporter={false}
      emptyWhileLoading
      hasCreate={true}
      hasEdit={true}
      title="Lister les expériences"
    >
      <Datagrid>
        <TextField source="name" label="Nom"/>
        <TextField source="company" label="Société"/>
        <TextField source="city" label="Ville"/>
        <DateField source="startedAt" label="Date de début" />
        <DateField source="endedAt" label="Date de fin" />
        <DateField source="createdAt" label="Date de création" />
        <DateField source="updatedAt" label="Date de mise à jour" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
