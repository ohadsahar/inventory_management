import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import styled from 'styled-components';

const AppNavbarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
  background-color: white;
`;

const AppNavbarIconWrapper = styled.div`
  cursor: pointer;
`;

const AppNavbarData = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: 2vw;
  padding-left: 3vw;
`;

export const AppNavbar = () => (
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
