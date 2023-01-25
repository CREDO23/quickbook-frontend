import { ExclamationOutlined } from "@ant-design/icons";
import { Select, SelectProps } from "antd";
import React from "react";
import { SelectinputProps } from "../types/input";

export default function SelectInput({
    options,
    onChange,
    value,
    placeholder,
    label,
    disabled = false,
    error,
}: SelectinputProps): JSX.Element {
    const opts: SelectProps["options"] = [];

    for (let i = 0; i < options?.length; i++) {
        opts.push({
            value: options[i].toString(),
            label: options[i].toString(),
        });
    }
    return (
        // <div
        //     className={`border m-1 flex items-center rounded-md justify-center h-10 w-full ${style}`}
        // >
        //     <Select
        //         value={value}
        //         onChange={onChange}
        //         placeholder={placeholder}
        //         options={opts}
        //         style={{
        //             width: "100%",
        //         }}
        //         bordered={false}
        //     />
        // </div>
        <div
            className={` flex m-1 flex-col w-full items-start justify-between gap-1  ${
                disabled ? " bg-custom-gray-50 " : ""
            }rounded `}
        >
            <p className=" text-custom-gray-100">{label}</p>

            <div
                className={`flex w-full h-10 border rounded ${
                    error ? "border-red" : ""
                } items-center justify-between  `}
            >
                <Select
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    options={opts}
                    style={{
                        width: "100%",
                    }}
                    bordered={false}
                />
            </div>

            {error && (
                <span className="text-custom-xs flex items-center gap-1 gap p-[2px] text-red">
                    <ExclamationOutlined className="p-[1px] text-[8px] border border-red rounded-full" />{" "}
                    {error}
                </span>
            )}
        </div>
    );
}
