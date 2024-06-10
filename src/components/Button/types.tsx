export interface ButtonProps {
  id?: string;
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string; 
  title?: string; 
  content?: string; 
  variant: 'grey' | 'darkblue' | 'pink' | 'green' | 'yellow' | 'lightgreen' | 'light' | 'dark'|'bright-green';
}