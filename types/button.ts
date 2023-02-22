/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export interface BtnProps {
    disabled?: boolean;
    block?: boolean;
    danger?: boolean;
    htmlType?: "button" | "submit" | "reset";
    icon?: ReactNode;
    ghost?: boolean;
    shape?: "circle" | "round" | "default";
    onClick: (e: any) => void;
    loading?: boolean;
    title: string;
    type?: "primary" | "ghost" | "link" | "dashed" | "text" | "default";
    size?: "large" | "small" | "middle";
}
