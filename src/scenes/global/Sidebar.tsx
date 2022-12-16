import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Theme, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { CustomPalette, tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const Sidebar: React.FC = () => {

    const theme: Theme = useTheme();
    const colors: CustomPalette = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');
  
    const handleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    }
  
    const menuItemsStyles = {
      '& .pro-inner-item': {
        padding: ' 5px 35px 5px 20px !important',
      },
      '& .pro-inner-item-hover': {
        color: '#868dfb !important',
      },
      '& .pro-menu-item.active': {
        color: '#6870fa !important',
      },
    }

    const logo = (
      <MenuItem
        onClick={handleCollapse}
        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
        style={{
          margin: '10px 0 20px 0',
          color: colors.grey[100],
        }}
      >
        {!isCollapsed && (
          <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
            <Typography variant="h3" color={colors.grey[100]}>
              ADMINIS
            </Typography>
            <IconButton onClick={handleCollapse}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        )}
      </MenuItem>
    );
  
    const userInfo = (
      <Box mb="25px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="100px"
            height="100px"
            src="../../assets/user.png"
            style={{ cursor: 'pointer', borderRadius: '50%' }}
          />
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h2"
            color={colors.grey[200]}
            fontWeight="bold"
            sx={{ m: '10px 0 0 0' }}
          >
            Ed Roh
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            VP Fancy Admin
          </Typography>
        </Box>
      </Box>
    );
  
    return (
      <Box
        sx={{
          '& .pro-sidebar-inner': {
            background: colors.primary[400],
          },
          '& .pro-icon-wrapper': {
            bgcolor: 'transparent !important',
            height: '100%'
          },
          ...menuItemsStyles,
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          {logo}
          {!isCollapsed && userInfo}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {/* Menu Items */}
          </Box>
          </ProSidebar>
        </Box>
    );
};

 export default Sidebar;
