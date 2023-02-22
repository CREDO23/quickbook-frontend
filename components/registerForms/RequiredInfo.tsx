import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import Input from "../Input";

export default function RequiredInfo(): JSX.Element {
    return (
        <form className="w-80 flex flex-col items-center gap-3">
            <Input
                required
                label="Username"
                labelColor="secondary"
                placeholder="Enter your username"
                addonAfter={<UserOutlined className=" text-white" />}
                onChange={() => {
                    console.log("");
                }}
            />

            <Input
                required
                label="Email"
                addonAfter={<MailOutlined className=" text-white" />}
                labelColor="secondary"
                placeholder="Enter your email adress"
                onChange={() => {
                    console.log("");
                }}
            />

            <Input
                required
                label="Phone Number"
                labelColor="secondary"
                placeholder="Enter your phone number"
                addonAfter={<PhoneOutlined className=" text-white" />}
                onChange={() => {
                    console.log("");
                }}
            />
        </form>
    );
}
