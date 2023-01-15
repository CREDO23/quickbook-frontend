import { LoadingOutlined } from "@ant-design/icons";
import { MouseEventHandler } from "react";

interface Props {
    disabled?: boolean;
    onClick: MouseEventHandler;
    style?: React.CSSProperties;
    loading?: boolean;
    name: string;
    type?: "default" | "outlined";
}

export default function Button({
    style,
    loading,
    disabled,
    onClick,
    name,
    type,
}: Props): JSX.Element {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={style}
            className={`${
                type == "outlined"
                    ? `    text-custom-gray-700 bg-transparent border-custom-gray-100`
                    : ` bg-gray-100 border-gray-100 shadow  relative transition-all hover:after:opacity-10  hover:after:h-full hover:after:w-full hover:after:bg-white hover:after:absolute hover:after:top-0 hover:after:left-0   hover:bg-gray-200`
            }  border my-2 h-10 text-custom-lg w-full flex items-center justify-center rounded gap-3 px-2 py-1`}
        >
            {loading && <LoadingOutlined />}
            {name}
        </button>
    );
}
