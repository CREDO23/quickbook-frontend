import { Input } from 'antd';
import { ChangeEventHandler } from 'react';

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}
export default function PasswordInput({ onChange, value }: Props): JSX.Element {
  return (
    <div className="h-10 w-full p-2 border flex items-center justify-center rounded">
      <Input.Password
        value={value}
        onChange={onChange}
        placeholder="input password"
        bordered={false}
      />
    </div>
  );
}
