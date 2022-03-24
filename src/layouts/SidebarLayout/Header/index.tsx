import { Avatar, Box, } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import images from 'src/utils/images';
import { FlagRounded, HelpOutlineRounded, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: 0 50px;
        right: 0;
        z-index: 5;
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`   
);

function Header() {
  return (
    <HeaderWrapper>
      <Box display={{display:'flex', alignItems:'center', borderBottom:'1px solid #DADEE1', justifyContent:'space-between', height:'88px'}}>
      <Box display="flex" flexDirection='column'>
        <Typography style={{fontSize:'22', color:'#1E2A34', marginLeft:'32',}} variant='h2'>Hello Soltan</Typography>
        <Typography style={{fontSize:'14', color:'#797C80', fontWeight:'lighter'}} variant='h3'>welcome back!</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap="1.5em">
        <Box style={{height:50, width:50, borderRadius:'50%', backgroundColor:'#1D8F4E', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <FlagRounded style={{color:'white'}}/>
        </Box>
        <Box style={{height:50, width:50, borderRadius:'50%', backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <HelpOutlineRounded/>
        </Box>
        <Box style={{height:50, width:50, borderRadius:'50%', backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <SettingsOutlined/>
        </Box>
        <Box style={{height:50, width:50, borderRadius:'50%', backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <NotificationsOutlined/>
        </Box>
        <Box style={{height:50, width:50, borderRadius:'50%', backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={images.avatar} />
        </Box>
      </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;

