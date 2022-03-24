import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SidebarContext } from 'src/contexts/SidebarContext';
import Logo from 'src/components/Logo';
import {TextField } from "@mui/material";
import '../Sidebar/style.scss';

import { Box, Drawer, Hidden } from '@mui/material';

import { styled } from '@mui/material/styles';
import SidebarMenu from './SidebarMenu';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            position: fixed;
            z-index: 10;
            border-top-right-radius: ${theme.general.borderRadius};
            border-bottom-right-radius: ${theme.general.borderRadius};
        }
`
);

const TopSection = styled(Box)(
  ({ theme }) => `
        display: flex;
        height: 88px;
        align-items: center;
        margin: 0 ${theme.spacing(2)} ${theme.spacing(2)};
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <Scrollbars autoHide>
            <TopSection>
              <Logo />
            </TopSection>
            <SidebarMenu />
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='form-wrap'>
        <h3><span>Invite</span> New Suplier</h3>
      <TextField id="outlined-contact-name" placeholder="Contact Name" type="text"/>
      <TextField id="outlined-contact-number" placeholder="Contact Number" type="tel" />
      <div className='btn-wrap'>
      <TextField id="outlined-email" placeholder="Email" type="Email"/>
      <button type='submit'>Invite</button>
      </div>
      </div>
    </Box>
          </Scrollbars>
        </SidebarWrapper>
      </Hidden>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarWrapper>
            <Scrollbars autoHide>
              <TopSection>
                <Logo />
              </TopSection>
              <SidebarMenu />
            </Scrollbars>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
    </>
  );
}

export default Sidebar;
