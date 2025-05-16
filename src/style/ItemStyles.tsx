import { Theme } from '@mui/material/styles';
import { CSSObject } from '@mui/system';
 
export const itemStyles = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  marginTop: 20,
  color: theme.palette.text.secondary,
});
