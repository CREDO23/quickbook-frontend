import { Input } from "antd";
import { ExclamationOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import { TextinputProps } from "../types/input";

export default function TextInput({
    disabled = false,
    onChange,
    value,
    error,
    label,
    placeholder,
    icon,
    iconPosition = "left",
    showLabel = true,
    type,
    onclick,
    iconStyle,
}: TextinputProps): JSX.Element {
    if (type == "password") {
        return (
            <div
                className={` flex m-1 flex-col w-full items-start justify-between gap-1  ${
                    disabled ? " bg-custom-gray-50 " : ""
                }rounded `}
            >
                {showLabel && <p className=" text-custom-gray-100">{label}</p>}
                <div className="h-10 m-1 w-full p-2 border flex items-center justify-center rounded">
                    <Input.Password
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        bordered={false}
                    />
                </div>
                {error && (
                    <span className="text-custom-xs flex items-center gap-1 gap p-[2px] text-red-600">
                        <ExclamationOutlined className="p-[1px] text-[8px] border border-red-600 rounded-full" />{" "}
                        {error}
                    </span>
                )}
            </div>
        );
    } else if (type == "search") {
        return (
            <div
                className={`flex w-full items-center h-10 border ${
                    disabled ? " bg-custom-gray-50" : ""
                } rounded m-1 justify-between gap-1`}
            >
                <Input
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    allowClear={true}
                    bordered={false}
                    placeholder={placeholder}
                />
                <span
                    className={`flex border-l cursor-pointer h-full px-4 rounded-r bg-custom-gray-50 text-custom-gray-100 items-center justify-center ${iconStyle}`}
                >
                    <SearchOutlined onClick={() => onclick} />
                </span>
            </div>
        );
    } else if (type == "textarea") {
        return (
            <div
                className={` flex m-1 flex-col w-full items-start justify-between gap-1  ${
                    disabled ? " bg-custom-gray-50 " : ""
                }rounded `}
            >
                {showLabel && <p className=" text-custom-gray-100">{label}</p>}
                <div
                    className={`flex w-full border rounded ${
                        error ? "border-red-300" : ""
                    } items-center justify-between  `}
                >
                    <Input.TextArea
                        onChange={onChange}
                        value={value}
                        disabled={disabled}
                        bordered={false}
                        placeholder={placeholder}
                    />
                </div>

                {error && (
                    <span className="text-custom-xs flex items-center gap-1 gap p-[2px] text-red-600">
                        <ExclamationOutlined className="p-[1px] text-[8px] border border-red-600 rounded-full" />{" "}
                        {error}
                    </span>
                )}
            </div>
        );
    } else {
        return (
            <div
                className={` flex m-1 flex-col w-full items-start justify-between ${
                    disabled ? " bg-custom-gray-50 " : ""
                }rounded `}
            >
                {showLabel && <p className=" text-custom-gray-100">{label}</p>}
                <div
                    className={`flex w-full h-10 border rounded ${
                        error ? "border-red-300" : ""
                    } items-center justify-between `}
                >
                    <Input
                        onChange={onChange}
                        value={value}
                        disabled={disabled}
                        bordered={false}
                        placeholder={placeholder}
                    />
                    {icon && (
                        <span
                            className={`flex ${
                                iconPosition == "right" ? "order-2" : "-order-1"
                            } text-custom-gray-100 mx-2 items-center justify-center`}
                        >
                            {icon}
                        </span>
                    )}
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
}
