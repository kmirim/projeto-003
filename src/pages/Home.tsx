import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { itemStyles } from '../style/ItemStyles';
import { Button, Stack, Typography} from '@mui/material';

const Item = styled(Paper)(({ theme }) => itemStyles(theme));

export default function ColumnsGrid() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant='h4' sx={{flex: 1, p:1}}>
        Serviços ofertados
      </Typography>
      <Grid container spacing={2} columns={12} padding ={4} justifyContent="center" alignItems="center">  
 {/* Primeira linha */}
 <Grid item xs={3}>
          <a href="#"><Item>Parte 1</Item></a>
        </Grid>
        <Grid item xs={3}>
          <a href="#"><Item>Parte 2</Item></a>
        </Grid>
        <Grid item xs={3}>
          <a href="#"><Item>Parte 3</Item></a>
        </Grid>
        <Grid item xs={3}>
          <a href="#"><Item>Parte 4</Item></a>
        </Grid>
        {/* Segunda linha */}
        <Grid item xs={3}>
          <a href="#"><Item>Parte 5</Item></a>
        </Grid>
        <Grid item xs={3}>
          <a href="#"><Item>Parte 6</Item></a>
        </Grid>
        <Grid item xs={3}>
          <a href="#"><Item>Parte 7</Item></a>
        </Grid>
        <Grid item xs={3}>
          <a href="#"><Item>Parte 8</Item></a>
        </Grid>
      </Grid>
      <Stack spacing={2} direction="row" justifyContent="center" > 
          <Button variant="outlined"> Login </Button>
          <Button variant="contained"> Cadastro </Button> 
        </Stack>
    </Box>
  );
}

