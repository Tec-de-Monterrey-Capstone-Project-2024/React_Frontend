export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'done' | 'ignore' | 'solve' | 'alert';
  color?: string; // Cambio
  title?: string; // Cambio
  content?: string; // Cambio
  variant: 'grey' | 'dark blue' | 'pink' | 'lightgreen' | 'yellow' | 'darkgreen';
}
