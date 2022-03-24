import { ListSubheader, List } from '@mui/material';
import { useLocation, matchPath } from 'react-router-dom';
import SidebarMenuItem from './item';
import menuItems, { MenuItem } from './items';
import { styled } from '@mui/material/styles';


const MenuWrapper = styled(List)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(1)};
    padding: 0;

    & > .MuiList-root {
      padding: 0 ${theme.spacing(2)} ${theme.spacing(2)};
    }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.sidebar.menuItemHeadingColor};
      padding: ${theme.spacing(0.8, 2)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(List)(
  ({ theme }) => `
  .active{
    background-color: #f2f5f7 !important;
    color: ${theme.sidebar.menuItemColorActive} !important;
    border-left: 5px solid #42C2B9 !important;
    border-radius: 0 !important;
    color:#1E2A34 !important;
    font-weight: 700 !important;
  }
    &.MuiList-root {
      padding: 0;
      margin-top:20px;

      .MuiList-root .MuiList-root .MuiListItem-root .MuiButton-root {
        font-weight: normal !important;
      }

      .MuiListItem-root {
        padding: 6px 16px 6px 0px;
    
        .MuiButton-root {
          display: flex;
          color: #797C80;
          background-color: ${theme.sidebar.menuItemBg};
          width: 100%;
          justify-content: flex-start;
          font-size: 16px;
          font-weight: 400;
          padding-top: ${theme.spacing(0.8)};
          padding-bottom: ${theme.spacing(0.8)};
          padding-left: 50px;
          position: relative;
          border-left: 5px solid transparent;


          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(4)};

            .MuiBadge-standard {
              background: ${theme.colors.primary.main};
              font-size: ${theme.typography.pxToRem(9)};
              font-weight: bold;
              text-transform: uppercase;
              color: ${theme.palette.primary.contrastText};
            }
          }
    
          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            font-size: ${theme.typography.pxToRem(26)};
            margin-right: 24px;
            color: #797C80;
          }
          
          .MuiButton-endIcon {
            margin-left: auto;
            font-size: ${theme.typography.pxToRem(22)};
          }

          
          &:hover {
            background-color: #f2f5f7;
            color: ${theme.sidebar.menuItemColorActive};
            border-left: 5px solid #42C2B9;
            border-radius: 0;
            color:#1E2A34 !important;
            fontweight: 700;
            .MuiButton-startIcon,
            .MuiButton-endIcon {
                color: #1E2A34;
            }
          }
        }

        &.Mui-children {
          flex-direction: column;
          line-height: 1;
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px ${theme.spacing(0)};

            .MuiButton-root {
              font-size: ${theme.typography.pxToRem(13)};
              padding: ${theme.spacing(0.5, 2, 0.5, 6.5)};

              &.Mui-active,
              &:hover {
                background-color: ${theme.sidebar.menuItemBg};
              }
            }
          }
        }
      }
    }
`
);

const renderSidebarMenuItems = ({
  items,
  path
}: {
  items: MenuItem[];
  path: string;
}): JSX.Element => (
  <SubMenuWrapper>
    {items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}
  </SubMenuWrapper>
);

const reduceChildRoutes = ({
  ev,
  path,
  item
}: {
  ev: JSX.Element[];
  path: string;
  item: MenuItem;
}): Array<JSX.Element> => {
  const key = item.name;

  const exactMatch = item.link ? !!matchPath({
    path: item.link,
    end: true
  }, path) : false;

  if (item.items) {
    const partialMatch = item.link ? !!matchPath({
      path: item.link,
      end: false
    }, path) : false;

    ev.push(
      <SidebarMenuItem
        key={key}
        active={partialMatch}
        open={partialMatch}
        name={item.name}
        icon={item.icon}
        link={item.link}
        badge={item.badge}
      >
        {renderSidebarMenuItems({
          path,
          items: item.items
        })}
      </SidebarMenuItem>
    );
  } else {
    ev.push(
      <SidebarMenuItem
        key={key}
        active={exactMatch}
        name={item.name}
        link={item.link}
        badge={item.badge}
        icon={item.icon}
      />
    );
  }

  return ev;
}

function SidebarMenu() {
  const location = useLocation();


  return (
    <>
      {menuItems.map((section) => (
        <MenuWrapper
          key={section.heading}
          subheader={
            <ListSubheader component="div" disableSticky>{section.heading}</ListSubheader>
          }
        >
          {renderSidebarMenuItems({
            items: section.items,
            path: location.pathname
          })}
        </MenuWrapper>
      ))}
    </>
  );
}

export default SidebarMenu;
