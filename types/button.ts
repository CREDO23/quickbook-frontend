/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps {
    disabled?: boolean;
    onClick: (e: any) => void;
    loading?: boolean;
    title: string;
    fullWidth?: boolean;
    type?: "default" | "outlined" | "link";
    color?: "primary" | "secondary";
    bgcolor? : 'blue' | 'yellow';
    size?: "big" | "small" | "medium";
}
