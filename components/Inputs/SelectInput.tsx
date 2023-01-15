import { Select, SelectProps } from "antd";
import { ChangeEventHandler } from "react";

interface Props {
    options: string[];
    onChange: ChangeEventHandler<HTMLSelectElement>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
    placeholder?: string;
}

export default function SelectInput({
    options,
    onChange,
    value,
    placeholder,
}: Props): JSX.Element {
    const opts: SelectProps["options"] = [];

    for (let i = 0; i < options?.length; i++) {
        opts.push({
            value: options[i].toString(),
            label: options[i].toString(),
        });
    }
    return (
        <div className=" h-10 w-full">
            <Select
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                options={opts}
                style={{
                    width: "250px",
                    border: "solid 1px #C5C5C5",
                    borderRadius: "0.2rem",
                }}
                bordered={false}
            />
        </div>
    );
}
