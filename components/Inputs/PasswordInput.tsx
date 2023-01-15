import { Input } from "antd";
import { ChangeEventHandler } from "react";

interface Props {
    onChange: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    placeholder?: string;
    label?: string;
    showLabel?: boolean;
}
export default function PasswordInput({
    onChange,
    value,
    placeholder,
    label,
    showLabel,
}: Props): JSX.Element {
    return (
        <div className="w-full my-2 flex flex-col gap-1">
            {showLabel && <p className=" text-custom-gray-700">{label}</p>}

            <div className="h-10 w-full p-2 border flex items-center justify-center rounded">
                <Input.Password
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    bordered={false}
                />
            </div>
        </div>
    );
}
