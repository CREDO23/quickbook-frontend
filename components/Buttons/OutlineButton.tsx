import { LoadingOutlined } from '@ant-design/icons';
import { MouseEventHandler } from 'react';

interface Props {
  disabled: boolean;
  onClick: MouseEventHandler;
  style: React.CSSProperties;
  loading: boolean;
}

export default function OutlinedButton({
  style,
  loading,
  disabled,
  onClick,
}: Props): JSX.Element {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`border m-2 gap-3  h-10 text-custom-lg w-64 flex items-center justify-center text-custom-yellow-900 bg-transparent border-custom-yellow-800
       rounded `}
    >
      {loading && <LoadingOutlined />}
      Envoyer
    </button>
  );
}
