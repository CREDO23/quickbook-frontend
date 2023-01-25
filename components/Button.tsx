import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import { FC } from "react";
import { ButtonProps } from "../types/button";

const Button: FC<ButtonProps> = (props) => {
    const {
        disabled = false,
        onClick,
        title,
        type = "default",
        loading = false,
        color = "primary",
        bgcolor = 'blue',
        fullWidth = false,
        size = "big",
    } = props;
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${color} ${bgcolor} ${type} ${size} ${
                fullWidth ? "w-full" : "w-60"
            } ${disabled ? "disabled" : ""} ${
                size === "big"
                    ? "h-12"
                    : size === "small"
                    ? "h-8"
                    : size === "medium"
                    ? "h-10"
                    : ""
            } flex justify-center items-center gap-3 button rounded m-1 px-8`}
        >
            {loading && <LoadingOutlined />}
            <span className="font-semibold text-sm">{title}</span>
        </button>
    );
};

export default Button;
