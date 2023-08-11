import {
  List,
  TextField,
  DateField,
  UrlField,
  EditButton,
  DeleteButton,
  NumberField,
  Datagrid
} from 'react-admin';

export default function ListProject() {
  return (
    <List
      exporter={false}
      emptyWhileLoading
      hasCreate={true}
      hasEdit={true}
      title="Lister les projets"
    >
      <Datagrid>
        <TextField source="name" label="Nom"/>
        <TextField source="shortDescription" label="Courte description"/>
        <UrlField target="_blank" source="url" label="URL"/>
        <NumberField source="year" label="Année" />
        <DateField source="createdAt" label="Date de création" />
        <DateField source="updatedAt" label="Date de mise à jour" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
