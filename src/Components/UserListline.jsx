import React from 'react'
import {ListItemText} from '@mui/material';
import { Avatar,ListItem,ListItemAvatar,Typography } from '@mui/material';
import styled from 'styled-components';

const ListSingle=styled(ListItem)`
background-color:#D4D4D4;
margin-top:5px;
padding:8px,10px,8px,10px;
`
function UserListline(props) {
  return (
    <ListSingle>
      <ListItemAvatar>
        <Avatar src={props.profilepic}/>
      </ListItemAvatar>
      <ListItemText>
        <Typography>{props.username}</Typography>
      </ListItemText>
    </ListSingle>

  )
}

export default UserListline