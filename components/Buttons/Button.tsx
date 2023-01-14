import { LoadingOutlined } from '@ant-design/icons';
import { MouseEventHandler } from 'react';

interface Props {
  disabled: boolean;
  onClick: MouseEventHandler;
  style: React.CSSProperties;
  loading: boolean;
}

export default function Button({
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
      className={`border m-2 bg-gray-100 border-gray-100 shadow h-10 text-custom-lg w-64  flex items-center relative transition-all hover:after:opacity-10  hover:after:h-full hover:after:w-full hover:after:bg-white hover:after:absolute hover:after:top-0 hover:after:left-0 justify-center gap-3 px-2 py-1 
       rounded  hover:bg-gray-200`}
    >
      {loading && <LoadingOutlined />}
      Envoyer
    </button>
  );
}
