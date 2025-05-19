import React from 'react';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { formBoxStyle } from '../style/ItemStyles';
// import '../style/card.css';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

interface CardItemProps{
    imageSrc:string;
    title: string;
    description: string,
    id: string;
}

export const CardItem:React.FC<CardItemProps> = ({imageSrc,title, description, id}) => {
  return ( 
  <Grid container bgcolor='#f1f1f1' padding={2} justifyContent='center' alignItems='center' borderRadius={2}sx={formBoxStyle}>
    <Grid item> 
      <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt={title} src={imageSrc} />
      </ButtonBase>
    </Grid>
    <Grid item xs={12} sm={6} container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            {title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {id}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{ cursor: 'pointer' }}
            variant="body2"
          >
            Remove
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
}