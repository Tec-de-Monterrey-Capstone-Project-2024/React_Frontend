export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'done' | 'ignore' | 'solve' | 'alert';
  color?: string; // Cambio
  title?: string; // Cambio
  content?: string; // Cambio
<<<<<<< HEAD
  variant: 'grey' | 'dark blue' | 'pink' | 'lightgreen' | 'yellow' | 'darkgreen';
=======
  // variant: 'grey' | 'dark blue' | 'pink' | 'green';
  variant: 'light' | 'dark';
>>>>>>> 518b638b15fd0505539efbacb0eef87f06e02df1
}
