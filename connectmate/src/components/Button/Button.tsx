import React from 'react';
import './Button.css'; // Importa el archivo de estilos CSS

interface ButtonProps {
  index?: number; // Hacer el índice opcional
  text?: string; // Prop para personalizar el texto del botón
  styles?: string; // Prop para estilos adicionales
  onClick?: () => void; // Función de devolución de llamada para eventos de clic
}

const Button: React.FC<ButtonProps> = ({ index = 1, text = 'Button', styles = '', onClick }) => {
  return (
    <button
      className={`custom-button ${styles}`} // Agrega la clase de estilos personalizados junto con las clases dinámicas
      onClick={onClick}
    >
      {text} {index}
    </button>
  );
};

export default Button;
