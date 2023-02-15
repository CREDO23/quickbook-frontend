export interface SelectProps {
    options: { label: string; value: unknown }[];
    label?: string;
    showLabel?: boolean;
    placeholder?: string;
    required?: boolean;
    error?: string;
    labelColor?: "primary" | "secondary";
}
