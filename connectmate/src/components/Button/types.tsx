export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string; // Cambio
  title?: string; // Cambio
  content?: string; // Cambio
  variant: 'grey' | 'darkblue' | 'pink' | 'green' | 'yellow' | 'lightgreen';
}
/*
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'done' | 'ignore' | 'solve' | 'alert';
  color?: string; // Cambio
  title?: string; // Cambio
  content?: string; // Cambio
  variant: 'light' | 'dark';
} */
