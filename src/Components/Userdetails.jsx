import { Box,  Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import UserImage from './AboutUser/UserImage';
import UserIds from './AboutUser/UserIds';
import { useRecoilValue } from 'recoil';
import {userState} from '../Services/UserState.js';

const UserDetailHeading=styled(Typography)`
&&{
  font-weight:500px !important;
  font-size :24px;
  text-align:center;
  padding:8px,10px,8px,10px;
  background-color :#C5DFFF;
  height:70px;
  color:black;
  font-family:Montserrat;
}
`;
const UserDetail=styled(Box)`
max-width: 502px;
min-width:502px;
color:white;
margin-top:110px;
margin-left:105px;
`
const UserDescription=styled(Box)`
min-width:304px;
min-height:87px;
background-color:#6C6C6C;
padding:8px;
border:1px;
radius:4px;
`
const UserName=styled(Typography)`
font-size:18px;
color:black;
margin-left:36%;
font-weight:bold;
`
function Userdetails() {
  const user = useRecoilValue(userState);
  return (
    <UserDetail>
     <UserDetailHeading>USER DETAILS</UserDetailHeading>
     <UserImage url={user?.avatar}/>
     <UserName >@{user?.profile.username}</UserName>
     <UserDescription>
        <Typography>{user?.Bio}</Typography>
     </UserDescription>
     <UserIds 
     fName ={user?.profile.firstName}
     lName={user?.profile.lastName}
     jName ={user?.jobTitle}
     eMail={user?.profile.email}
     />
    </UserDetail>
   
    
  )
}

export default Userdetails;