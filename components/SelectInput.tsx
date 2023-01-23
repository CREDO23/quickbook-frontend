import { Select, SelectProps } from "antd";
import React from "react";
import { SelectinputProps } from "../types/input";

export default function SelectInput({
    options,
    onChange,
    value,
    placeholder,
    style,
}: SelectinputProps): JSX.Element {
    const opts: SelectProps["options"] = [];

    for (let i = 0; i < options?.length; i++) {
        opts.push({
            value: options[i].toString(),
            label: options[i].toString(),
        });
    }
    return (
        <div
            className={`border m-1 flex items-center rounded-md justify-center h-10 w-full ${style}`}
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
    );
}
