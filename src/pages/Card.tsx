import React from 'react';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

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
    price: string;
    // onRemove?: () => void;
}

export const CardItem:React.FC<CardItemProps> = ({imageSrc,title, description, id, price}) => {
  return (    
  <Grid container spacing={2} columns={12} bgcolor='#f1f1f1' padding={4} border="1px solid grey" borderRadius={2}>
    <Grid item> 
      <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt={title} src={imageSrc} />
      </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
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
      <Grid item>
        <Typography variant="subtitle1" component="div">
          {price}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);
}