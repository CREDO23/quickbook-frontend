import { Input } from "antd";
import { ChangeEventHandler, ReactNode } from "react";
import { ExclamationOutlined } from "@ant-design/icons";

interface Props {
    disabled?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    error?: string;
    label?: string;
    placeholder?: string;
    showLabel?: boolean;
    icon?: ReactNode;
    iconPosition?: "right" | "left";
}

export default function TextInput({
    disabled,
    onChange,
    value,
    error,
    label,
    placeholder,
    showLabel,
    icon,
    iconPosition,
}: Props): JSX.Element {
    return (
        <div
            className={` flex flex-col w-full items-start justify-between my-2 gap-1  ${
                disabled ? " bg-custom-gray-50 " : ""
            }rounded `}
        >
            {showLabel && <p className=" text-custom-gray-700">{label}</p>}

            <div
                className={`flex w-full h-10 border rounded ${
                    error ? "border-red-300" : ""
                } items-center justify-between ${
                    iconPosition == "left" ? "pr-4" : "pl-2"
                } `}
            >
                <Input
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    bordered={false}
                    placeholder={placeholder}
                />
                <span
                    className={`flex ${
                        iconPosition == "left" ? "order-2" : "-order-1"
                    } text-custom-gray-100 items-center justify-center`}
                >
                    {icon}
                </span>
            </div>

            {error && (
                <span className="text-custom-xs flex items-center gap-1 gap p-[2px] text-red-600">
                    <ExclamationOutlined className="p-[1px] text-[8px] border border-red-600 rounded-full" />{" "}
                    {error}
                </span>
            )}
        </div>
    );
}
