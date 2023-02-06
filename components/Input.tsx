import { InfoCircleOutlined } from "@ant-design/icons";
import { Input as Inpt } from "antd";
import { InputProps } from "../types/input";

export default function Input(props: InputProps): JSX.Element {
    const {
        placeholder,
        label,
        value,
        defaultValue,
        onChange,
        onPressEnter,
        onSearch,
        allowClear = false,
        addonAfter,
        addonBefore,
        size = 'middle',
        type = 'text', 
        status,
        disabled = false,
        maxLength,
        showCount = false,
        prefix,
        suffix,
        autoSize,
        loading = false,
        showLabel = true,
        error
    } = props;
    return (
        <div className="w-60 text-blue-10 m-1 flex flex-col justify-center gap-1">
            {showLabel && <p>{label}</p>}   
            {
                type === 'text' &&  <Inpt
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                onPressEnter={onPressEnter}
                allowClear={allowClear}
                addonAfter={addonAfter}
                addonBefore={addonBefore}
                size={size}
                status={error ? 'error' : status}
                disabled={disabled}
                maxLength={maxLength}
                showCount={showCount}
                prefix={prefix}
                suffix={suffix}
            />
            }
             {
                type === 'password' &&  <Inpt.Password
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onPressEnter={onPressEnter}
                allowClear={allowClear}
                addonAfter={addonAfter}
                addonBefore={addonBefore}
                size={size}
                status={error ? 'error' : status}
                disabled={disabled}
            />
            }
             {
                type === 'search' &&  <Inpt.Search
                placeholder={placeholder}
                value={value}
                onSearch={onSearch}
                loading={loading}
                defaultValue={defaultValue}
                onChange={onChange}
                onPressEnter={onPressEnter}
                allowClear={allowClear}
                addonAfter={addonAfter}
                addonBefore={addonBefore}
                size={size}
                status={error ? 'error' : status}
                disabled={disabled}
                maxLength={maxLength}
                showCount={showCount}
                prefix={prefix}
                suffix={suffix}
            />
            }
            {
                type === 'textarea' &&  <Inpt.TextArea
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                onPressEnter={onPressEnter}
                size={size}
                status={error ? 'error' : status}
                disabled={disabled}
                maxLength={maxLength}
                showCount={showCount}
                autoSize={autoSize}
            />
            }
            {error &&  <div className=" text-xs font-light text-red flex items-center gap-1">
            <InfoCircleOutlined /><p>{error}</p>
            </div>}
        </div>
    );
}
