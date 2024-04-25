import React from 'react';
import { ButtonProps } from './types'; // Asegúrate de que la ruta al archivo de tipos es correcta


// El componente Button toma las propiedades definidas en ButtonProps
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant,

  title = '', // El título se usa para accesibilidad, como un tooltip
}) => {
  // Construye una cadena de clases de CSS basada en la variante y cualquier clase adicional proporcionada
  const buttonClass = `button ${variant} ${className}`.trim();

  return (
    <button
      className={buttonClass} // Aplica las clases de CSS al botón
      onClick={onClick}
      type={type}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
