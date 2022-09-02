import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppNavbarData, AppNavbarIconWrapper, AppNavbarWrapper } from './Styled';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const AppNavbar = () => {
  return (
    <AppNavbarWrapper>
      <AppNavbarData>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" fontSize="medium" />
        </Badge>
        <AppNavbarIconWrapper>
          <AccountCircleIcon fontSize="large" />
        </AppNavbarIconWrapper>
      </AppNavbarData>
    </AppNavbarWrapper>
  );
};

export default AppNavbar;
