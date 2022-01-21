import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


function Footer() {
    const [value, setValue] = React.useState(0);
   
  return <div>

<Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={()=>{
            
        }} label="Nav1" />
        <BottomNavigationAction label="Nav2"  />
        <BottomNavigationAction label="Nav3"  />
      </BottomNavigation>
    </Box>
  </div>;
}

export default Footer;
