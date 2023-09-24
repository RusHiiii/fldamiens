import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
  ImageField,
  useNotify,
  useTranslate,
  required,
  minLength,
} from 'react-admin';
import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";

export default function CreateExperience() {
  const notify = useNotify();
  const translate = useTranslate();

  return (
    <Create redirect="list" title="Ajouter une expérience">
      <SimpleForm>
        <Typography variant="h4" gutterBottom>
          Formulaire de création
        </Typography>
        <Grid container width="100%" spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h6" gutterBottom>
              Informations
            </Typography>
            <Box flex={1} mr="0.5em">
              <TextInput source="name" fullWidth name="name" label="Nom" validate={[required(), minLength(5)]}/>
            </Box>
            <Box flex={1} mr="0.5em">
              <TextInput source="company" fullWidth name="company" label="Société" validate={[required(), minLength(5)]}/>
            </Box>
            <Box flex={1} mr="0.5em">
              <TextInput source="city" fullWidth name="city" label="Ville" validate={[required(), minLength(5)]} />
            </Box>
            <Box flex={1} mr="0.5em">
              <TextInput fullWidth multiline minRows={5} name="description" source={"description"} label="Description" validate={required()}/>
            </Box>
            <Typography variant="h6" gutterBottom>
              Logo
            </Typography>
            <Box flex={1} ml="0.5em">
              <ImageInput
                name="file"
                source={"file"}
                label="Logo"
                accept="image/png"
                maxSize={5000000}
                placeholder={
                  <>
                    <p>Types de fichiers acceptés : PNG</p>
                    <p>Taille maximale : 5Mo</p>
                  </>
                }
                options={{
                  onDropRejected: rejections => {
                    rejections.map(rejection => {
                      rejection.errors.map(error => {
                        notify(translate(error.message), {type: 'error'});
                      });
                    });
                  }
                }}
              >
                <ImageField source="src" />
              </ImageInput>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>
              Date
            </Typography>
            <Box flex={1} mr="0.5em">
              <DateInput source="startedAt" fullWidth name="startedAt" label="Date de début" validate={required()}/>
            </Box>
            <Box flex={1} mr="0.5em">
              <DateInput source="endedAt" fullWidth name="endedAt" label="Date de fin" validate={required()}/>
            </Box>
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
}
