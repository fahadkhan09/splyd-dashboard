import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import images from 'src/utils/images';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
        margin-top: 20px;

        img {
          height:150px;
          width:150px;
          object-fit: contain;
        };
`
);


const LogoTextWrapper = styled(Box)(
  ({ }) => `
        padding-top: 40px;
        padding-left:30px;
`
);

function Logo() {


  return (
    <LogoWrapper to="/">
        <LogoTextWrapper>
          <img src={images.logo} alt="logo" />
        </LogoTextWrapper>
    </LogoWrapper>
  );
}

export default Logo;
