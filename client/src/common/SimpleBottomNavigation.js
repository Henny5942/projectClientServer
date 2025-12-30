import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FaCheck } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { MdPhotoLibrary } from "react-icons/md";
import { MdAddPhotoAlternate } from "react-icons/md";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { MdCameraAlt } from "react-icons/md";
import { MdLibraryAddCheck } from "react-icons/md";
import { MdImage } from "react-icons/md";
import { MdGrading } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { MdChecklistRtl } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { MdArticle } from "react-icons/md";


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label={<NavLink to="tasks">Tasks</NavLink>} icon={<FaCheck />} />
        <BottomNavigationAction label={<NavLink to="posts">Posts</NavLink>} icon={<FaCheck />} />
        <BottomNavigationAction label={<NavLink to="photos">Photos</NavLink>} icon={<FaCheck />} />
        <BottomNavigationAction label={<NavLink to="users">Users</NavLink>} icon={<FaCheck />} />
      </BottomNavigation>
    </Box>
  );
}