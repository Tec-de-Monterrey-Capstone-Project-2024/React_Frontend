export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant: 'light' | 'dark' | 'green' | 'darkblue' | 'grey' | 'pink' | 'lightgreen' | 'yellow' | 'darkgreen';
    color?: string; 
    title?: string; 
    content?: string;

    // Otros props si son necesarios
  }
  