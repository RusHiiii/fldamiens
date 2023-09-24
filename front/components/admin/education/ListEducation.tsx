import {
  List,
  TextField,
  DateField,
  EditButton,
  Datagrid, DeleteButton
} from 'react-admin';

export default function ListEducation() {
  return (
    <List
      exporter={false}
      emptyWhileLoading
      hasCreate={true}
      hasEdit={true}
      title="Lister les formations"
    >
      <Datagrid>
        <TextField source="name" label="Nom"/>
        <TextField source="city" label="Ville"/>
        <TextField source="studyType" label="Nom du diplôme"/>
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
