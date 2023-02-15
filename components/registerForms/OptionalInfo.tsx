import { UserOutlined} from "@ant-design/icons";
import Input from "../Input";
import Select from "../Select";

export default function OptionalInfo () : JSX.Element {
    return <form className="w-80 flex flex-col items-center gap-3">
    <Input
        required
        label="Firstname"
        labelColor="secondary"
        placeholder="Enter your firstname"
        addonAfter={<UserOutlined className=" text-white" />}
        onChange={() => {
            console.log("");
        }}
    />
        <Input
        required
        label="Lastname"
        labelColor="secondary"
        placeholder="Enter your lastname"
        addonAfter={<UserOutlined className=" text-white" />}
        onChange={() => {
            console.log("");
        }}
    />
    <Select labelColor="secondary" placeholder="Select your Genre" label="Genre" options={[{label : 'Male' , value : 'M'} , {label : 'Female' , value : 'F'} , {label : 'Other' , value : 'O'}]}/>
    <Input
        required
        type="textarea"
        label="Description"
        labelColor="secondary"
        placeholder="Describe yourself here ..."
        addonAfter={<UserOutlined className=" text-white" />}
        onChange={() => {
            console.log("");
        }}
    />

   
</form>
}