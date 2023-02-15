import { InfoCircleOutlined } from '@ant-design/icons'
import {Select as Slct} from 'antd'
import { SelectProps } from '../types/Select'


export default function Select (props : SelectProps) : JSX.Element {

    const {label , placeholder , options , labelColor = 'primary', showLabel = true , error} = props
    return <div className="w-full text-blue-10 m-1 flex flex-col justify-center gap-1">
             {showLabel && (
                <p
                    className={` ${
                        labelColor == "primary"
                            ? " text-blue-10"
                            : labelColor == "secondary"
                            ? " text-white"
                            : ""
                    }`}
                >
                    {label}
                </p>
            )}
            <Slct options={options} placeholder={placeholder}/>
            {error && (
                <div className=" text-xs font-light text-red flex items-center gap-1">
                    <InfoCircleOutlined />
                    <p>{error}</p>
                </div>
            )}
    </div>
}