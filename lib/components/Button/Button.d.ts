/// <reference types="react" />
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
declare type ButtonProps = Pick<MuiButtonProps, 'variant' | 'title'>;
declare const App: (props: ButtonProps) => JSX.Element;
export default App;
export type { ButtonProps };
