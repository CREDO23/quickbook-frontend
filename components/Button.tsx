import { Button as Btn } from "antd";
import { BtnProps } from "../types/button";

export default function Button(props: BtnProps): JSX.Element {
    const {
        disabled = false,
        ghost = false,
        title,
        loading = false,
        danger = false,
        shape = "default",
        htmlType,
        size = "middle",
        block = false,
        type = "default",
        icon,
        onClick,
    } = props;

    return (
        <Btn
            className={`${type === 'primary' ? ' hover:opacity-90' : ''}`}
            style={type === "primary" ? { background: "#2973F2" } : undefined}
            type={type}
            size={size}
            block={block}
            icon={icon}
            onClick={onClick}
            ghost={ghost}
            disabled={disabled}
            loading={loading}
            danger={danger}
            shape={shape}
            htmlType={htmlType}
        >
            {title}
        </Btn>
    );
}
