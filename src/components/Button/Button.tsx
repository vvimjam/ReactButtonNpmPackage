import Button from '@mui/material/Button';
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import React from 'react';

type ButtonProps = Pick<MuiButtonProps, 'variant' | 'title'>;

const App = (props: ButtonProps) => {
  return <Button variant={props?.variant ?? 'contained'}>{props?.title ?? 'Button'}</Button>;
}
export default App;

export type { ButtonProps };

