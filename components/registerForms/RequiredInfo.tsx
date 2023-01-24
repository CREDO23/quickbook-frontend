import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import TextInput from "../Input";


export default function RequiredInfosForm(): JSX.Element {
    return (
        <div className="flex  text-blue-900 flex-col items-center justify-around gap-2 w-full">
            <div className=" w-11/12 md:w-1/2 flex flex-col gap-1">
                <TextInput
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    iconPosition="left"
                    icon={<UserOutlined />}
                    showLabel={true}
                    label="User Name"
                    placeholder="Enter your username"
                />
                <TextInput
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    iconPosition="left"
                    icon={<MailOutlined />}
                    showLabel={true}
                    label="Email Adress"
                    placeholder="Enter your email adress"
                />
                <TextInput
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    iconPosition="left"
                    label={"Phone Number"}
                    showLabel={true}
                    placeholder="Enter your phone number"
                    icon={<PhoneOutlined />}
                />
            </div>
        </div>
    );
}