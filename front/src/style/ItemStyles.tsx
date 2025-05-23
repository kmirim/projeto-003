import { styled, Theme } from '@mui/material/styles';
import { CSSObject } from '@mui/system';
 
export const itemStyles = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  marginTop: 20,
  color: theme.palette.text.secondary,
});

export const gridContainerStyle = (theme: Theme): CSSObject => ({
  marginTop: theme. spacing(4),
  justifyContent: 'center',
  alignItems: 'center',
});

export const gridItemStyle = (theme: Theme): CSSObject => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
})

export const containerBoxStyle = (theme: Theme) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: theme.spacing(1),
});

export const formBoxStyle = {
  width: {
    xs: '100%',
    md: '60%',
  },
  margin: '0 auto',
};
