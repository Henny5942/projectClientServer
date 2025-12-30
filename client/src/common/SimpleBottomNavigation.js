import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MdPhotoLibrary } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { MdChecklistRtl } from "react-icons/md";
import { MdArticle } from "react-icons/md";


export default function SimpleBottomNavigation() {
  const navigate= useNavigate()
  const [value, setValue] = React.useState(0);

  return (<>
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Tasks" icon={<MdChecklistRtl />} onClick={() => navigate("/tasks")}/>
        <BottomNavigationAction label="Posts" icon={<MdArticle />} onClick={() => navigate("/posts")}/>
        <BottomNavigationAction label="Photos" icon={<MdPhotoLibrary />} onClick={() => navigate("/photos")}/>
        <BottomNavigationAction label="Users" icon={<MdContacts />} onClick={() => navigate("/users")}/>
      </BottomNavigation>
    </Box>
      
    </>
  );
}