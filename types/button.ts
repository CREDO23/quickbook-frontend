export interface ButtonProps {
    disabled?: boolean;
    onClick: (e: any) => void;
    loading?: boolean;
    title: string;
    fullWidth?: boolean;
    type?: "default" | "outlined" | "link";
    color?: "primary" | "secondary";
    size?: "big" | "small" | "medium";
}
