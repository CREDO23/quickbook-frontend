import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ChangeEventHandler } from "react";

interface Props {
    bgIcon?: string;
    disabled?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    placeholder?: string;
    showLabel?: boolean;
    onclick: void;
}

export default function SearchInput({
    value,
    disabled,
    onclick,
    onChange,
    placeholder,
}: Props): JSX.Element {
    return (
        <div
            className={`flex w-full items-center h-10 border ${
                disabled ? " bg-custom-gray-50" : ""
            } rounded justify-between gap-1`}
        >
            <Input
                onChange={onChange}
                value={value}
                disabled={disabled}
                allowClear={true}
                bordered={false}
                placeholder={placeholder}
            />
            <span className="flex border-l cursor-pointer h-full px-4 rounded-r bg-custom-gray-50 text-custom-gray-100 items-center justify-center">
                <SearchOutlined onClick={() => onclick} />
            </span>
        </div>
    );
}
