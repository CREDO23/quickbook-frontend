import { FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Button: FC<IButtonProps> = (props) => {
    const {
        disabled = false,
        onClick ,
        type = "default",
        title,
        fullWidth = false,
        size = "big",
        loading = false,
        color = "primary",
    } = props;
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${
                fullWidth ? "w-full" : "w-60"
            }  ${type} ${color} ${size == 'big' ? 'h-12' : size == 'medium' ? 'h-10' : size == 'small' ? 'h-8' : ''} ${color} button flex items-center justify-center gap-2 px-2 py-1`}
        >
                <span>{title}</span>
                {loading && <LoadingOutlined />}
        </button>
    );
};

export default Button;
