import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ImageInput,
  ImageField,
  useNotify,
  useTranslate,
  required,
  minLength,
} from 'react-admin';
import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {RichTextInput} from "ra-input-rich-text";

export default function CreateProject() {
  const notify = useNotify();
  const translate = useTranslate();

  return (
    <Create redirect="list" title="Ajouter une expérience">
      <SimpleForm>
        <Typography variant="h4" gutterBottom>
          Formulaire de création
        </Typography>
        <Grid container width="100%" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Informations
            </Typography>
            <Box flex={1} mr="0.5em">
              <TextInput source="name" fullWidth name="name" label="Nom" validate={[required(), minLength(5)]}/>
            </Box>
            <Box flex={1} mr="0.5em">
              <TextInput source="url" fullWidth name="url" label="URL" validate={[required(), minLength(5)]} />
            </Box>
            <Box flex={1} mr="0.5em">
              <NumberInput source="year" fullWidth name="year" label="Année" validate={[required()]} />
            </Box>
            <Box flex={1} mr="0.5em">
              <TextInput fullWidth multiline minRows={2} name="shortDescription" source={"shortDescription"} label="Courte description" validate={[required(), minLength(5)]}/>
            </Box>
            <Box flex={1} mr="0.5em">
              <RichTextInput
                sx={{
                  '& .RaRichTextInput-editorContent': {
                    '& .ProseMirror': {
                      minHeight: '15em'
                    }
                  }
                }}
                fullWidth
                name="description"
                source={"description"}
                label="Description"
                validate={required()}
              />
            </Box>
            <Typography variant="h6" gutterBottom>
              Logo
            </Typography>
            <Box flex={1} ml="0.5em">
              <ImageField source="primary_image.contentUrl" />
              <ImageInput
                name="primaryFile"
                source={"primaryFile"}
                label="Image d'illustration"
                accept="image/*"
                maxSize={5000000}
                validate={required()}
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
              <ImageField source="secondary_image.contentUrl" />
              <ImageInput
                name="secondaryFile"
                source={"secondaryFile"}
                label="Seconde image d'illustration"
                accept="image/*"
                maxSize={5000000}
                validate={required()}
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
        </Grid>
      </SimpleForm>
    </Create>
  );
}
