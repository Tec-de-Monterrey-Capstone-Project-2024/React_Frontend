export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';

  variant: 'light' | 'dark' | 'green' | 'darkblue' | 'grey' | 'pink' | 'lightgreen' | 'yellow' | 'darkgreen';
  color?: string; // Esta propiedad puede ser eliminada si se manejan todos los colores con variantes
  title?: string; // Título del botón para accesibilidad o información adicional (tooltip)
  content?: string; // Esta propiedad podría no ser necesaria si children se utiliza para el contenido
}
