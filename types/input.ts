import { ChangeEventHandler, ReactNode } from "react";

export interface TextinputProps {
    disabled?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    error?: string;
    label?: string;
    placeholder?: string;
    showLabel?: boolean;
    icon?: ReactNode;
    iconPosition?: "right" | "left";
    type?: string;
    iconStyle?: string;
    onclick?: void;
}

export interface SelectinputProps {
    options: string[];
    onChange: ChangeEventHandler<HTMLSelectElement>;
    value?: any;
    placeholder?: string;
    style?: string;
}
