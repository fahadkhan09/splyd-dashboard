import { ReactNode } from 'react';


import GridViewIcon from '@mui/icons-material/GridView';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: GridViewIcon
      },
        {
          name: 'Projects',
          link: '/projects',
          icon: CreateNewFolderOutlinedIcon
        },
        {
          name: 'Orders',
          icon: ShoppingBagOutlinedIcon,
          link: '/orders'
        },
      {
        name: 'Payments',
        link: '/payments',
        icon: CreditCardOutlinedIcon
      },
        {
          name: 'Company',
          link: '/company',
          icon: StoreOutlinedIcon
        },
        {
          name: 'Bank',
          icon: CommentBankOutlinedIcon,
          link: '/blank'
        },
    ]
  },

];

export default menuItems;
