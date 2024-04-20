export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    variant?: string;
    size?: string;
    index: number;
  }