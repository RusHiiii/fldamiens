import {FieldProps, useRecordContext} from 'react-admin';
import {User} from "../../../types/user";
import {Chip} from "@mui/material";

const RoleField = (props: FieldProps) => {
  const record = useRecordContext<User>();

  return (
      <>
        {record.roles.includes('ROLE_ADMIN') && (
            <Chip label="Administrateur" />
        )}
        {!record.roles.includes('ROLE_ADMIN') && (
            <Chip label="Utilisateur" />
        )}
      </>
  )
};

export default RoleField;
