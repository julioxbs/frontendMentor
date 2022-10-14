import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    handleClick: () => void;
    className?: string;
}

export function Button({ children, handleClick, className }: ButtonProps) {
    return <button onClick={handleClick} className={`btn-style ${className}`}>{children}</button>
} 