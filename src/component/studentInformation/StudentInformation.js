import React, {useState, useEffect} from 'react'
import {StudentInformationAPI} from '../../api/StudentInformationAPI'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StudentInformation = () => {

const [id, SetId]= useState()
const [name, SetName]= useState()
const [username, SetUserName]= useState()
const [email, SetEmail]= useState()
const [street, SetStreet]= useState()
const [suit, SetSuit]= useState()
const [city, SetCity]= useState()
const [phone, SetPhone]= useState()


  const userId='1';

  useEffect((res) =>{
   StudentInformationAPI(userId)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res;

          SetId(data.id);
          SetName(data.name);
          SetUserName(data.username);
          SetEmail(data.email)
          SetStreet(data.address.street)
          SetSuit(data.address.suit)
          SetCity(data.address.city)
          SetPhone(data.phone)
         
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
    StudentInformation
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>Id: {id}</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Name: {name}</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>UserName: {username}</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Email-id: {email}</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Address: {street}, {suit}, {city}</Item>
       </Grid>
       <Grid item xs={12}>
          <Item>Phone: {phone}</Item>
        </Grid>


      </Grid>
    </Box>
    </>
  )
}

export default StudentInformation

