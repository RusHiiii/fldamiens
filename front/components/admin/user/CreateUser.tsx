import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  regex,
  required,
  minLength,
  email,
  SelectArrayInput
} from 'react-admin';
import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";

export default function CreateUser() {
  return (
    <Create redirect="list" title="Ajouter un utilisateur">
      <SimpleForm>
        <Typography variant="h4" gutterBottom>
          Formulaire de création
        </Typography>
        <Grid container width="100%" spacing={2}>
          <Grid item xs={10}>
            <Typography variant="h6" gutterBottom>
              Informations
            </Typography>
            <Box flex={1} mr="0.5em">
              <TextInput source="firstname" fullWidth name="firstname" label="Prénom" validate={[required(), minLength(5)]}/>
            </Box>
            <Box flex={1} mr="0.5em">
              <TextInput source="lastname" fullWidth name="lastname" label="Nom" validate={[required(), minLength(5)]}/>
            </Box>
            <Box flex={1} mr="0.5em">
              <TextInput source="email" fullWidth name="email" label="Email" validate={[required(), email()]}/>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" gutterBottom>
              Rôles
            </Typography>
            <Box flex={1} mr="0.5em">
              <SelectArrayInput defaultValue={['ROLE_ADMIN']} fullWidth source="roles" name="roles" label="Rôles" validate={[required()]} choices={[
                { id: 'ROLE_ADMIN', name: 'Administrateur' }
              ]} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Mot de passe
            </Typography>
            <Box flex={1} mr="0.5em">
              <PasswordInput source="plainPassword" fullWidth name="plainPassword" label="Mot de passe" validate={[required(), minLength(8), regex(/^[a-zA-Z0-9]+$/, 'Uniquement les lettres minuscules, majuscules et les chiffres sont autorisées')]}/>
            </Box>
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
}
