import {AppBar, UserMenu, Logout, MenuItemLink} from 'react-admin';
import PeopleIcon from '@mui/icons-material/People';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const TopBar = (props: any) => (
  <AppBar
    {...props}
    alwaysOn={true}
    userMenu={
      <UserMenu icon={<PeopleIcon />}>
        <Logout {...props} icon={<ExitToAppIcon />} />
      </UserMenu>
    }
  >
  </AppBar>
);

export default TopBar;
